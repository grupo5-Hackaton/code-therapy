import { render, screen } from '@testing-library/react';
import App from './App';


test('renderiza link de clases', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: 'clases' })
  expect(link).toBeInTheDocument();
});

