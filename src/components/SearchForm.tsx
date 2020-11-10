import React, { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import { usePrevious } from '../lib/usePrevious';
import { getApi } from '../api/getApi';
import { formatNoData } from '../lib/formatNoData';

import { CandlesType, CompanyType, DateRange } from '../types';
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

type Props = {
  setCompanyInfo: React.Dispatch<React.SetStateAction<CompanyType | undefined>>;
  setDateInfo: React.Dispatch<React.SetStateAction<DateRange>>;
  setStockInfo: React.Dispatch<React.SetStateAction<CandlesType | undefined>>;
};
const SearchForm: FC<Props> = ({
  setCompanyInfo,
  setDateInfo,
  setStockInfo,
}): JSX.Element => {
  const [company, setCompany] = useState<string>('');
  const [startDate, setStartDate] = useState(fromDate);
  const [endDate, setEndDate] = useState(toDate);
  // error messages
  const [invalidDates, setInvalidDates] = useState<string>('');
  const [invalidCompany, setInvalidCompany] = useState<string>('');
  const [apiError, setApiError] = useState<string>('');
  // guard
  const [requesting, setRequesting] = useState<boolean>(false);

  // date picker
  useEffect(() => {
    if (startDate > toDate || endDate > toDate) {
      setInvalidDates('Starting or ending date cannot be in the future');
    } else {
      setInvalidDates('');
    }
  }, [startDate, endDate]);

  const datePickerChange = (dates: string[]) => {
    const [start, end] = dates;
    setStartDate(new Date(start).getTime());
    setEndDate(new Date(end).getTime());
    setApiError('');
  };

  // company search
  useEffect(() => {
    if (company.length === 1) {
      setInvalidCompany('');
    }
  }, [company]);

  const handleInputChange = (company: string) => {
    setCompany(company);
    setApiError('');
  };

  // form submit
  const previousCompany = usePrevious(company);
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (requesting) return;

    const validate = (): boolean => {
      if (!company) {
        setInvalidCompany('Please enter a company code');
      }
      if (!company || invalidDates || invalidCompany) {
        return false;
      }
      setRequesting(true);
      return true;
    };

    const apiRoute = () => {
      if (company === previousCompany) {
        runCandlesApi();
      }
      if (company !== previousCompany) {
        runCandlesApi();
        runCompanyApi();
      }
      setRequesting(false);
    };

    const passed = validate();
    if (passed) apiRoute();
  };

  const runCandlesApi = async () => {
    const stockError = `No stock data returned. Please check ${company} is a valid company code.`;
    try {
      const res = await getApi(company, 'candles', startDate, endDate);
      const { response } = res;
      const formatted = formatNoData(response, 'candles');
      if (formatted) {
        setStockInfo(formatted);
        setDateInfo({ from: startDate, to: endDate });
      } else {
        setStockInfo(undefined);
        setApiError(stockError);
      }
    } catch (e) {
      console.log('e', e);
      setApiError(stockError);
    }
  };

  const runCompanyApi = async () => {
    const companyError = 'No company info returned.';
    try {
      const res = await getApi(company, 'companyInfo', startDate, endDate);
      const { response } = res;
      const formatted = formatNoData(response, 'companyInfo');
      if (formatted) {
        setCompanyInfo(formatted);
      } else {
        setCompanyInfo(undefined);
        setApiError(companyError);
      }
    } catch (e) {
      setApiError(companyError);
    }
  };

  return (
    <Form data-testid="form" onSubmit={onSubmit}>
      <Label htmlFor="search">Search by company code</Label>
      <SearchBar
        id="search"
        type="search"
        placeholder="Search by company code..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          handleInputChange(e.target.value);
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
      {invalidDates && (
        <Error>
          <p>{invalidDates}</p>
        </Error>
      )}
      {invalidCompany && (
        <Error>
          <p>{invalidCompany}</p>
        </Error>
      )}
      {apiError && (
        <Error>
          <p>{apiError}</p>
        </Error>
      )}
    </Form>
  );
};

export default SearchForm;
