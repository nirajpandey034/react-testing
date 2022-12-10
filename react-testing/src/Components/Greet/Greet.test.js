import { render, screen } from '@testing-library/react';
import Greet from './Greet';
test('Greet Renders correctly', () => {
  render(<Greet />);
  const text = screen.getByText('Hello');
  expect(text).toBeInTheDocument();
});


test('Greet Renders with a name', () => {
  render(<Greet name="niraj"/>);
  const text = screen.getByText('Hello niraj');
  expect(text).toBeInTheDocument();
});
 