import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders text', () => {
  const { getByText } = render(<App />);
  const text = getByText('Search for a company and retrieve its share data');
  expect(text).toBeInTheDocument();
});