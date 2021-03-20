import { render, screen } from '@testing-library/react';
import DiceGame from './DiceGame';

test('renders learn react link', () => {
  render(<DiceGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
