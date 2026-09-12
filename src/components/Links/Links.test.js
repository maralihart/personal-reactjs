import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Links from './index';

function renderLinks() {
  return render(
    <MemoryRouter initialEntries={['/social/links']}>
      <Route exact path="/social/links"><Links /></Route>
    </MemoryRouter>
  );
}

test('separates social profile icons from the three link cards', () => {
  renderLinks();

  const collection = screen.getByRole('region', { name: 'The good things, gathered.' });
  const links = within(collection).getAllByRole('link');
  expect(links).toHaveLength(3);
  const profiles = screen.getByRole('navigation', { name: 'Social profiles' });
  expect(within(profiles).getAllByRole('link')).toHaveLength(2);
  ['Instagram', 'TikTok'].forEach((name) => {
    expect(within(profiles).getByRole('link', { name }).querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(within(collection).queryByRole('link', { name })).not.toBeInTheDocument();
  });
  const destinations = [
    ['Instagram', 'https://instagram.com/mi.lk'],
    ['TikTok', 'https://tiktok.com/@maradrinksmilk'],
    ['Amazon storefront', 'https://www.amazon.com/shop/influencer-97f7757d'],
    ['Subscribe on YouTube', 'https://youtube.com/channel/UCfuOFxW3PgXzPpZBYHnE3uA?sub_confirmation=1'],
    ['Lala Hijab', 'https://lalahijabs.com/milk'],
  ];

  destinations.forEach(([name, href]) => {
    const link = screen.getByRole('link', { name });
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.rel).toContain('noopener');
    expect(link.rel).toContain('noreferrer');
    const description = link.getAttribute('aria-describedby').split(' ')
      .map((id) => document.getElementById(id).textContent).join(' ');
    expect(description).toMatch(/Links open in a new tab/);
  });

  ['Amazon storefront', 'Lala Hijab'].forEach((name) => {
    expect(screen.getByRole('link', { name }).rel).toContain('sponsored');
  });
  ['Instagram', 'TikTok', 'Subscribe on YouTube'].forEach((name) => {
    expect(screen.getByRole('link', { name }).rel).not.toContain('sponsored');
  });
  expect(screen.getByText(/As an Amazon Associate I earn/)).toBeInTheDocument();
  expect(screen.queryByText(/media kit|to save/i)).not.toBeInTheDocument();
});

test('keeps the social identity separate from the bakery', () => {
  const { container } = renderLinks();

  expect(document.title).toBe('Links | Mara');
  expect(screen.getByRole('heading', { level: 1, name: 'Hi, I’m Mara.' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Mara drinking juice at brunch' })).toBeInTheDocument();
  expect(container.textContent).not.toMatch(/bread|bakery/i);
  expect(container.querySelector('.social-wordmark')).toHaveTextContent(/^Mara$/);
  expect(screen.getAllByRole('link')).toHaveLength(6);
  expect(screen.getByRole('link', { name: 'pr@mara.fyi' })).toHaveAttribute('href', 'mailto:pr@mara.fyi');
  expect(container.querySelector('a[href^="/bread"]')).not.toBeInTheDocument();
});

test('renders its static links without a fetch or XMLHttpRequest', () => {
  const originalFetch = global.fetch;
  const fetchMock = jest.fn();
  global.fetch = fetchMock;
  const xhrOpen = jest.spyOn(XMLHttpRequest.prototype, 'open');

  try {
    renderLinks();
    expect(screen.getByRole('link', { name: 'Amazon storefront' })).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(xhrOpen).not.toHaveBeenCalled();
  } finally {
    xhrOpen.mockRestore();
    if (originalFetch === undefined) {
      delete global.fetch;
    } else {
      global.fetch = originalFetch;
    }
  }
});
