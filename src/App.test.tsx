import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

// should be able to add this to config:
afterEach(cleanup);

// test('renders container with correct padding', () => {
//   render(<App />);
//   const container = screen.getByText('this is the share price app');
//   // debug();
//   // const style = window.getComputedStyle(container);
//   // expect(style.padding).toBe('2.5rem');
// });

test('renders text', () => {
  const { getByText } = render(<App />);
  const text = getByText('Search for a company and retrieve its share data:');
  expect(text).toBeInTheDocument();
});


// test('renders text', () => {
//   const container = screen.getByText('this is the share price app');
//   expect(container).toBeInTheDocument();
// });
