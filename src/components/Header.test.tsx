import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('Header component tests', () => {
  it('renders text', () => {
    const { getByText } = render(<Header />);
    const text = getByText('Share Price Finder:');
    expect(text).toBeInTheDocument();
  });
});
