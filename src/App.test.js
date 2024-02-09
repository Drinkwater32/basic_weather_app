import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders with proper title', () => {
  render(<App />);
  const appTitle = screen.getByText("Lee's Weather App");
  expect(appTitle).toBeInTheDocument();
});
