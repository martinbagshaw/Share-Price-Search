import React, { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import { DateRange } from '../types';
import { buttonMixin, colors, font, Error } from '../styles';
import { fromDate, toDate } from '../lib/defaultDates';

const Form = styled.form`
  background-color: ${colors.greyLight};
  border: 1px solid ${colors.greyMid};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${colors.boxShadow};
`;

const Label = styled.label`
  font-weight: 500;
  color: ${colors.blueDark};
  line-height: 1.4;
  font-size: 0.75rem;
  @media screen and (min-width: 480px) {
    font-size: 1rem;
  }
`;

const DateLabel = styled(Label)`
  margin-bottom: 1rem;
`;

const SearchBar = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.75rem;
  font-family: ${font};
  font-size: 0.75rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  border: 1px solid ${colors.greyMid};
  &:focus {
    outline: none;
    border: 1px solid ${colors.blueLight};
    background-color: ${colors.blueTranslucent};
  }
  @media screen and (min-width: 480px) {
    font-size: 1rem;
    padding: 1rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Submit = styled.input`
  ${buttonMixin};
  align-self: flex-end;
  margin-top: 1rem;
`;

type Func = (companyCode: string, dateRange: DateRange) => void;
type Props = {
  apiError?: boolean;
  getSearchValues: null | Func;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  resetApiError: () => void;
};
const SearchForm: FC<Props> = ({ apiError, getSearchValues, onSubmit, resetApiError }): JSX.Element => {
  const [company, setCompany] = useState<string>('');

  const [startDate, setStartDate] = useState(fromDate);
  const [endDate, setEndDate] = useState(toDate);
  const [invalid, setInvalid] = useState<string>('');

  useEffect(() => {
    if (getSearchValues && !company) {
      setInvalid('please enter a company code');
    }
    if (getSearchValues && !invalid && company) {
      const dates: DateRange = {
        from: fromDate,
        to: toDate,
      };
      getSearchValues(company, dates);
    }
  }, [getSearchValues]);

  useEffect(() => {
    if (startDate > toDate || endDate > toDate) {
      setInvalid('Starting or ending date cannot be in the future');
    } else {
      setInvalid('');
    }
  }, [endDate]);

  const emptySubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalid('Please enter a company code');
  };

  const datePickerChange = (dates: string[]) => {
    const [start, end] = dates;
    setStartDate(new Date(start).getTime());
    setEndDate(new Date(end).getTime());
  };

  return (
    <Form data-testid="form" onSubmit={company ? onSubmit : emptySubmit}>
      <Label htmlFor="search">Search by company code</Label>
      <SearchBar
        id="search"
        type="search"
        placeholder="Search by company code..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setCompany(e.target.value);
          setInvalid('');
          resetApiError();
        }}
        value={company}
      />
      <DateLabel htmlFor="date">Pick a date range</DateLabel>
      <DatePicker
        id="date"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={datePickerChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <Submit type="submit" value="Submit" />
      {invalid && (
        <Error>
          <p>{invalid}</p>
        </Error>
      )}
      {apiError && !invalid && (
        <Error>
          <p>Invalid company code</p>
        </Error>
      )}
    </Form>
  );
};

export default SearchForm;
