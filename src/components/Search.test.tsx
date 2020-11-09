import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import Search from './Search';

afterEach(cleanup);

describe('Search component tests', () => {
  it('renders placeholder', () => {
    const { getByPlaceholderText } = render(<Search getSearchValues={null} />);
    const placeholder = getByPlaceholderText('Search by company code...');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders updated input value after update', async () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<Search getSearchValues={null} />);
    const search = getByPlaceholderText('Search by company code...');

    fireEvent.change(search, { target: { value: 'AAPL' } });
    await waitFor(() => getByDisplayValue('AAPL'));
  });

  it('getSearchValues function fires if passed in as a prop', async () => {
    const getSearchValues = jest.fn(() => null);
    const { getByPlaceholderText } = render(<Search getSearchValues={getSearchValues} />);
    const search = getByPlaceholderText('Search by company code...');
    expect(getSearchValues).toHaveBeenCalled();
    expect(search).toHaveValue('');
  });
});
