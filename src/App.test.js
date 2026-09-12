import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./pages/Bread', () => () => <h1>Bakery</h1>);
jest.mock('./pages/SocialLinks', () => () => <h1>Social links</h1>);

test.each([
  ['/', '/bread', 'Bakery'],
  ['/bread', '/bread', 'Bakery'],
  ['/bread/starter', '/bread/starter', 'Bakery'],
  ['/bread/recipes/pancakes', '/bread/recipes/pancakes', 'Bakery'],
  ['/social/links', '/social/links', 'Social links'],
  ['/links', '/social/links', 'Social links'],
  ['/social', '/social/links', 'Social links'],
  ['/old-fashion', '/bread', 'Bakery'],
  ['/social/links/unknown', '/bread', 'Bakery'],
  ['/breadth', '/bread', 'Bakery'],
])('%s resolves to %s', (initialPath, expectedPath, heading) => {
  window.history.replaceState({}, '', initialPath);
  render(<App />);

  expect(window.location.pathname).toBe(expectedPath);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
});
