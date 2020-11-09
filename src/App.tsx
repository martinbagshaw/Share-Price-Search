import React, { FC, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
declare const module: any;

import { DateRange } from './types';
import { getApi } from './api/getApi';
import { fromDate, toDate } from './lib/defaultDates';
import { formatNoData } from './lib/formatNoData';

import { buttonMixin, containerMixin, colors, font } from './styles';
import Header from './components/Header';
import Search from './components/Search';
import CompanyInfo from './components/CompanyInfo';

const Page = styled.div`
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

const Submit = styled.input`
  ${buttonMixin};
  align-self: flex-end;
`;

const Error = styled.div`
  background-color: ${colors.redLight};
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  p {
    font-family: ${font};
    font-size: 1rem;
    color: ${colors.red};
  }
`;

type SearchObject = {
  companyCode?: string;
  dateRange: DateRange;
};

const App: FC = (): JSX.Element => {
  const [stocks, setStocks] = useState<any>(undefined); //CandlesType | undefined. need to mod types
  const [error, setError] = useState<string | boolean>(false);
  const [info, setInfo] = useState<any>(undefined); // undefined|CompanyType. As above
  const [requesting, setRequesting] = useState<boolean>(false);
  const [search, setSearch] = useState<SearchObject>({
    dateRange: {
      from: fromDate,
      to: toDate,
    },
  });

  // 1 - search, get stocks (right panel - chart and raw)
  // 2 - company info api call off the back of that (underneath search bar)
  // 3 - financials and news options - buttons for these

  // TODO:
  // 1. instructions
  // - tooltip for a resource - get company code

  // 2. UI
  // - search bar (and list)
  // - date picker
  // - some sort of charting library

  const getSearchValues = (companyCode: string, dateRange: DateRange): void => {
    if (companyCode === search.companyCode) {
      setRequesting(false);
    }
    if (companyCode !== search.companyCode) {
      const newSearch = { ...search };
      newSearch.companyCode = companyCode;
      newSearch.dateRange = dateRange;
      setError(false);
      setRequesting(true);
      setSearch({ companyCode, dateRange });
    }
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequesting(true);
  };

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

    // from and to can be problematic
    // - they need to be updated from the Search before being passed in here
    if (from >= to) {
      console.log('from and to is wrong');
    }

    // options: candles, companyInfo, companyNews, financials
    // make sure you have the right code in

    // getApi(companyCode, 'companyInfo')
    // getApi(companyCode, 'financials'
    // getApi(companyCode, 'candles', from, to)
    // getApi(companyCode, 'companyNews', from, to)

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
    <Fragment>
      <Header />

      <Page>
        <LeftColumn>
          <ColumnContainer>
            <Form onSubmit={onSubmit}>
              <Search getSearchValues={requesting ? getSearchValues : null} />
              <Submit type="submit" value="Submit" />
              {error && (
                <Error>
                  <p>{error}</p>
                </Error>
              )}
            </Form>
            {info && <CompanyInfo {...info} />}
          </ColumnContainer>
        </LeftColumn>
        <RightColumn>{stocks && JSON.stringify(stocks, null, 2)}</RightColumn>
      </Page>

      {/* https://www.tradingview.com/widget/advanced-chart/ */}

      {/* https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=buik82748v6rtf2l9psg */}
      {/* https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&from=1572651390&to=1575243390&token=buik82748v6rtf2l9psg */}

      {/* <iframe
        // src=""

        src="https://widget.finnhub.io/widgets/stocks/chart?symbol=IBM&amp;metric=all&amp;from=1572651390&amp;to=1575243390&amp;token=buik82748v6rtf2l9psg&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white"
        width="100%"
        max-width="1200"
        height="400"
        frameBorder="0"
      ></iframe> */}
    </Fragment>
  );
};

export default hot(module)(App);
