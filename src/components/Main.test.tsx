import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Main from './Main';

afterEach(cleanup);

test('renders text', () => {
  const { getByText } = render(<Main />);
  const text = getByText('Search for a company and retrieve its share data');
  expect(text).toBeInTheDocument();
});