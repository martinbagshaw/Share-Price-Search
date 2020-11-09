import React, { FC, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import { DateRange } from '../types';
import { colors, font } from '../styles';
import { fromDate, toDate } from '../lib/defaultDates';

const Label = styled.label`
  font-weight: 500;
  color: ${colors.blueDark};
  line-height: 1.4;
  font-size: 0.75rem;
  @media screen and (min-width: 480px) {
    font-size: 1rem;
  }
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

type Func = (companyCode: string, dateRange: DateRange) => void;
type Props = {
  getSearchValues: null | Func;
};
const Search: FC<Props> = ({ getSearchValues }): JSX.Element => {
  const [company, setCompany] = useState<string>('');
  const [dates, setDates] = useState<DateRange>({
    from: fromDate,
    to: toDate,
  });

  useEffect(() => {
    if (getSearchValues) {
      getSearchValues(company, dates);
    }
  }, [getSearchValues]);

  return (
    <Fragment>
      <Label htmlFor="search">Search</Label>
      <SearchBar
        id="search"
        type="text"
        placeholder="Search by company code..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setCompany(e.target.value);
        }}
        value={company}
      />
    </Fragment>
  );
};

export default Search;
