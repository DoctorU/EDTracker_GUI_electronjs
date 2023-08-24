import { render, screen } from '@testing-library/react';
import DeviceDumper from './component'

test('renders when no devices', () => {
  const objs = undefined
  render(<DeviceDumper devices={objs} />);
  const rendered = JSON.stringify(objs, undefined, 2);
  const text = screen.getByText(rendered);
  expect(text).toBeInTheDocument();
});
test('renders when empty array passed', () =>{
  const objs = [];
  render(<DeviceDumper devices={objs} />);
  const rendered = JSON.stringify(objs, undefined, 2);
  const text = screen.getByText(rendered);
  expect(text).toBeInTheDocument();
  
});
test('renders when obj array passed', () =>{
  const objs = [{"usagePage": 1, "usage": 1, "vendorId":1, "productId": 1}];
  render(<DeviceDumper devices={objs} />);
  const rendered = JSON.stringify(objs, undefined, 2);
  const text = screen.getByText(rendered);
  expect(text).toBeInTheDocument();
  
});
