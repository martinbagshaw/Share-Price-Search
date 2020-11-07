import { cleanup } from '@testing-library/react';
import { getQuery } from './getQuery';

afterEach(cleanup);

const apiKey = 'TEST_API_KEY';
const api = 'https://finnhub.io/api/v1/';

describe('getQuery tests', () => {
  it('getQuery: test candles API', () => {
    const companyCode = 'APPL';
    const apiType = 'candles';
    const from = '1572651390';
    const to = '1575243390';
    const res = getQuery(companyCode, apiType, from, to);
    expect(res).toEqual(
      `${api}stock/candle?symbol=${companyCode}&resolution=D&from=${from}&to=${to}&token=${apiKey}`
    );
  });

  it('getQuery fails with an invalid apiType', () => {
    const companyCode = 'APPL';
    const apiType = 'financial';
    const res = getQuery(companyCode, apiType);
    expect(res).toEqual(undefined);
  });

  it('getQuery: test companyNews API', () => {
    const companyCode = 'APPL';
    const apiType = 'companyNews';
    const from = 1604688051808;
    const to = 1604687856077;
    const res = getQuery(companyCode, apiType, from, to);
    expect(res).toEqual(
      `${api}company-news?symbol=${companyCode}&from=2020-11-06&to=2020-11-06&token=${apiKey}`
    );
  });
});
