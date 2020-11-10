import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import SearchForm from './SearchForm';

afterEach(cleanup);

describe('SearchForm component tests', () => {
  it('renders placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchForm onSubmit={() => {}} getSearchValues={null} />
    );
    const placeholder = getByPlaceholderText('Search by company code...');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders updated input value after update', async () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <SearchForm onSubmit={() => {}} getSearchValues={null} />
    );
    const search = getByPlaceholderText('Search by company code...');
    fireEvent.change(search, { target: { value: 'AAPL' } });
    await waitFor(() => getByDisplayValue('AAPL'));
  });

  // !invalid && company
  // it('getSearchValues function fires if passed in as a prop, date is not invalid, and company is valid', async () => {
  //   const getSearchValues = jest.fn()
  //   const onSubmit = jest.fn();
  //   const { getByPlaceholderText, getByDisplayValue, getByTestId } = render(
  //     <SearchForm onSubmit={onSubmit} getSearchValues={getSearchValues} />
  //   );
  //   const search = getByPlaceholderText('Search by company code...');
  //   const form = getByTestId('form');

  //   // fill in the search bar
  //   fireEvent.change(search, { target: { value: 'IBM' } });
  //   await waitFor(() => {
  //     getByDisplayValue('IBM');
  //   });

  //   fireEvent.submit(form);
  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalled();
  //     expect(getSearchValues).toHaveBeenCalled();
  //   });
  // });

  // https://stackoverflow.com/questions/53654822/how-to-test-date-picker-component-in-jest
});
