import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import SearchForm from './SearchForm';

afterEach(cleanup);

describe('SearchForm component tests', () => {
  it('renders placeholder', () => {
    const { getByPlaceholderText } = render(
      // @ts-ignore
      <SearchForm onSubmit={() => {}} getSearchValues={null} />
    );
    const placeholder = getByPlaceholderText('Search by company code...');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders updated input value after update', async () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      // @ts-ignore
      <SearchForm onSubmit={() => {}} getSearchValues={null} />
    );
    const search = getByPlaceholderText('Search by company code...');
    fireEvent.change(search, { target: { value: 'AAPL' } });
    await waitFor(() => getByDisplayValue('AAPL'));
  });
});
