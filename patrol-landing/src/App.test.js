import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Audit Your Store Now button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Audit Your Store Now/i);
  expect(buttonElement).toBeInTheDocument();
});
