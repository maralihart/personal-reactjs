import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Bread from './index';

jest.mock('./useBreadMotion', () => ({ __esModule: true, default: jest.fn() }));

beforeEach(() => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

function renderBread(path = '/bread') {
  return render(<MemoryRouter initialEntries={[path]}><Bread /></MemoryRouter>);
}

test('home has all bakery sections and real order destinations', () => {
  renderBread();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Good bread.');
  expect(screen.getByText('Small-batch sourdough, made to order.')).toBeInTheDocument();
  expect(screen.getByText(/All bread is made to order, arranged directly with Mara/)).toBeInTheDocument();
  ['bakes', 'starter', 'recipes', 'rewards', 'order'].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
  expect(screen.getByRole('link', { name: /Message @breadbymara/ })).toHaveAttribute('href', 'https://www.instagram.com/breadbymara/');
  expect(screen.getByRole('link', { name: /Or email bread@mara.fyi/ })).toHaveAttribute('href', 'mailto:bread@mara.fyi');
  expect(document.querySelector('a[href^="/social"]')).not.toBeInTheDocument();
});

test('home uses Mara’s photos and advertises both rewards', () => {
  renderBread();
  const heroImage = screen.getByRole('img', { name: 'Three freshly baked sourdough sandwich loaves cooling on a rack' });
  expect(heroImage).toHaveAttribute('src', '/images/bread/sandwich-loaves.webp');
  expect(heroImage.closest('.bread-hero')).toBeInTheDocument();
  const bakes = document.getElementById('bakes');
  expect(bakes.querySelectorAll('.bread-product-media .bread-illustration')).toHaveLength(2);
  expect(within(bakes).queryByRole('img')).not.toBeInTheDocument();
  const rewards = within(screen.getByRole('region', { name: 'Good bread. Better together.' }));
  expect(rewards.getByText(/For every friend you refer/)).toHaveTextContent('For every friend you refer, they get a free upgrade and you get $3 in credit.');
  expect(rewards.getByText('free classic loaf').closest('p')).toHaveTextContent('For every 10 loaves you buy, you get a free classic loaf.');
  expect(rewards.getByRole('link', { name: /Order & ask about rewards/ })).toHaveAttribute('href', '/bread#order');
  expect(screen.queryByRole('link', { name: /Unsplash/ })).not.toBeInTheDocument();
});

test('starter drilldown opens a complete feeding guide and native FAQ controls', () => {
  renderBread();
  fireEvent.click(screen.getByRole('link', { name: /Bring your starter to life/ }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('wake up your starter');
  expect(screen.getByText('Days 3-7+')).toBeInTheDocument();
  expect(screen.getByText(/two consecutive feedings/)).toBeInTheDocument();
  expect(screen.getByText('When should I start over?').tagName).toBe('SUMMARY');
  expect(screen.getByText(/pink or orange streaks/)).toBeInTheDocument();
});

test.each([
  ['/bread/recipes/pancakes', 'Sourdough pancakes', '120 g sourdough discard (100% hydration)'],
  ['/bread/recipes/french-toast', 'Meal-prep French toast', '8 thick slices sourdough sandwich bread'],
])('recipe deep link %s has ingredients and directions', (path, title, ingredient) => {
  renderBread(path);
  expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  expect(screen.getByText(ingredient)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Let’s make it.' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Back to the kitchen/ })).toHaveAttribute('href', '/bread#recipes');
});

test('product drilldown shows supplied base ingredients, flavors, and allergens', () => {
  renderBread();
  fireEvent.click(screen.getAllByRole('link', { name: /What’s in it/ })[0]);
  expect(screen.getByRole('heading', { name: 'Sourdough sandwich bread' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Sourdough focaccia' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Dehydrated starter' })).toBeInTheDocument();
  expect(screen.getByText('Organic unbleached flour and water, fermented and dehydrated.')).toBeInTheDocument();
  expect(screen.queryByText(/Follow the instructions supplied|Ingredient preview/)).not.toBeInTheDocument();
  expect(screen.getByText('Organic unbleached flour, water, sourdough starter (organic unbleached flour, water), and salt.')).toBeInTheDocument();
  expect(screen.getByText('Sourdough starter (organic unbleached flour, water), salt, water, organic unbleached flour, and organic extra virgin olive oil.')).toBeInTheDocument();
  const dateLoaf = within(screen.getByRole('region', { name: 'Date & date syrup loaf' }));
  expect(dateLoaf.getByText('Sandwich loaf base plus dates and date syrup (100% dates).')).toBeInTheDocument();
  expect(dateLoaf.getByText(/Contains wheat\./)).toBeInTheDocument();
  const zaatarLoaf = within(screen.getByRole('region', { name: 'Zaatar loaf' }));
  expect(zaatarLoaf.getByText('Sandwich loaf base plus zaatar (roasted sesame seeds, dried thyme, roasted wheat, soybean oil, salt).')).toBeInTheDocument();
  expect(zaatarLoaf.getByText(/Contains wheat, sesame, and soy\./)).toBeInTheDocument();
  expect(screen.getByText(/cross-contact with allergens may occur/)).toBeInTheDocument();
  expect(screen.queryByText(/not confirmed product labels|recipes and toppings are still being confirmed/)).not.toBeInTheDocument();
  expect(screen.queryByText(/rosemary|honey/)).not.toBeInTheDocument();
  expect(screen.getAllByText(/Contains wheat/)).toHaveLength(5);
});

test('home includes sandwich flavors and the cross-contact notice', () => {
  renderBread();
  expect(screen.getByText('Also available in Date & date syrup and Zaatar.')).toBeInTheDocument();
  expect(screen.getByText(/cross-contact with allergens may occur/)).toBeInTheDocument();
  expect(screen.queryByText(/not confirmed product labels/)).not.toBeInTheDocument();
});

test.each(['/bread', '/bread/starter', '/bread/ingredients', '/bread/recipes/pancakes', '/bread/recipes/french-toast'])('all flour references on %s specify organic unbleached flour', (path) => {
  const { container } = renderBread(path);
  expect(container.textContent.replace(/organic unbleached flour/gi, '')).not.toMatch(/\bflour\b/i);
});

test.each(['/bread/recipes/missing', '/bread/recipes/toString', '/bread/unknown'])('unknown path %s offers recovery', (path) => {
  renderBread(path);
  expect(screen.getByRole('heading', { name: 'This page isn’t in the oven.' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Back to bread' })).toHaveAttribute('href', '/bread');
});
