import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Замула Н.С./);
  
  expect(linkElement).toBeInTheDocument();
});
