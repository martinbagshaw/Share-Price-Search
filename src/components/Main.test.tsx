import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Main from './Main';

afterEach(cleanup);

test('renders text', () => {
  const { getByLabelText } = render(<Main />);
  const text = getByLabelText('Search by company code');
  expect(text).toBeInTheDocument();
});