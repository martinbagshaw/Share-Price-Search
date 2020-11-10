import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { CandlesType, CompanyType, DateRange } from '../types';
import { fromDate, toDate } from '../lib/defaultDates';
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
  const [stockInfo, setStockInfo] = useState<CandlesType | undefined>(undefined);
  const [companyInfo, setCompanyInfo] = useState<CompanyType | undefined>(undefined);
  const [dateInfo, setDateInfo] = useState<DateRange>({
    from: fromDate,
    to: toDate,
  });


  // TODO:
  // 1. cleanup, fix tests, commit
  // 2. share panel:
  // - high, low, average for the week
  // - some sort of charting library
  // 3.
  // - financials and news options
  // ^ api calls from buttons

  // THEN
  // - answer questions in answers-to-technical-questions.md

  return (
    <Page>
      <LeftColumn>
        <ColumnContainer>
          <SearchForm
            setCompanyInfo={setCompanyInfo}
            setDateInfo={setDateInfo}
            setStockInfo={setStockInfo}
          />
          {companyInfo && <CompanyInfo {...companyInfo} />}
        </ColumnContainer>
      </LeftColumn>
      <RightColumn>
        <ColumnContainer>
          {stockInfo && companyInfo && (
            <ShareInfo companyInfo={companyInfo} dateInfo={dateInfo} stockInfo={stockInfo} />
          )}
        </ColumnContainer>
      </RightColumn>
    </Page>
  );
};

export default Main;
