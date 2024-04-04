import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/We construct your vision/i); // Adjusted to match the changed text
  expect(linkElement).toBeInTheDocument();
});
