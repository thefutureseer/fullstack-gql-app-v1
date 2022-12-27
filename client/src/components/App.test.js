import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text & list from DB will be underneath', () => {
  render(<App />);
  const textElement = screen.getByText(/List of secrets/i);
  expect(textElement).toBeInTheDocument();
});
