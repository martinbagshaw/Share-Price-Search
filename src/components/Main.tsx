import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateRange, SearchObject } from '../types';
import { getApi } from '../api/getApi';
import { fromDate, toDate } from '../lib/defaultDates';
import { formatNoData } from '../lib/formatNoData';

import { containerMixin, colors } from '../styles';

import SearchForm from './SearchForm';
import CompanyInfo from './CompanyInfo';
import ShareInfo from './ShareInfo';

const Page = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const RightColumn = styled.div`
  ${containerMixin};
  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: none;
    padding-top: 2rem;
    display: flex;
  }
`;

const LeftColumn = styled(RightColumn)`
  background-color: ${colors.blueTranslucent};
  @media screen and (min-width: 768px) {
    border-right: 1px solid ${colors.blueDark};
    height: 100vh;
    justify-content: flex-end;
  }
`;

const ColumnContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: calc(600px - 2rem);
    width: 100%;
  }
`;

const Main: FC = (): JSX.Element => {
  const [stocks, setStocks] = useState<any>(undefined);
  const [error, setError] = useState<string>('');
  const [info, setInfo] = useState<any>(undefined);
  const [requesting, setRequesting] = useState<boolean>(false);
  const [search, setSearch] = useState<SearchObject>({
    dateRange: {
      from: fromDate,
      to: toDate,
    },
  });

  const getSearchValues = (companyCode: string, dateRange: DateRange): void => {

    if (companyCode === search.companyCode) {
      setRequesting(false);
    }
    if (companyCode !== search.companyCode) {
      const newSearch = { ...search };
      newSearch.companyCode = companyCode;
      newSearch.dateRange = dateRange;
      setError('');
      setRequesting(true);
      setSearch({ companyCode, dateRange });
    }
  };

  const resetApiError = () => {
    setError('');
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequesting(true);
  };

  // listen for date change as well
  useEffect(() => {
    if (search.companyCode) {
      runApiCall();
    }
  }, [search.companyCode]);

  const runApiCall = async () => {
    const {
      companyCode,
      dateRange: { from, to },
    } = search;

    try {
      const res = await getApi(companyCode, 'candles', from, to);
      const { response } = res;
      const formatted = formatNoData(response, 'candles');
      setStocks(formatted);
    } catch (e) {
      setError(`No stock data returned. Please check ${companyCode} is valid`);
    }
    try {
      const res = await getApi(companyCode, 'companyInfo', from, to);
      const { response } = res;
      const formatted = formatNoData(response, 'companyInfo');
      setInfo(formatted);
    } catch (e) {
      setError(`No company info returned.`);
    }
  };

  return (
    <Page>
      <LeftColumn>
        <ColumnContainer>
          <SearchForm
            apiError={(error && typeof error === 'string') || (info && typeof info === 'string')}
            onSubmit={onSubmit}
            getSearchValues={requesting ? getSearchValues : null}
            resetApiError={resetApiError}
          />
          {info && typeof info !== 'string' && <CompanyInfo {...info} />}
        </ColumnContainer>
      </LeftColumn>
      <RightColumn>
        <ColumnContainer>
          {stocks && typeof stocks !== 'string' && (
            <ShareInfo search={search} stocks={stocks} />
          )}
        </ColumnContainer>
      </RightColumn>
    </Page>
  );
};

export default Main;
