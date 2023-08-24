import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<DeviceSelector devices={null} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
