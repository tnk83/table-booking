import { render, screen } from '@testing-library/react';
import Reservations from '../pages/Reservations';

test('Renders the Reservations page', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});