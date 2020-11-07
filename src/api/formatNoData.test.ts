import { cleanup } from '@testing-library/react';
import { formatNoData } from './formatNoData';
import { financialsRet } from './apiTestData';

afterEach(cleanup);

const financialsFailed = {
  metric: {},
  metricType: 'all',
  series: {},
  symbol: 'AAPL',
};

describe('formatNoData tests', () => {
  it('formats falsy API response', () => {
    const res = formatNoData(undefined);
    expect(res).toEqual('No data returned');
  });

  it('formats API response: should not be a string', () => {
    const res = formatNoData('whatever');
    expect(res).toEqual('No data returned');
  });
  
  it("formats empty candles API response (s: 'no_data')", () => {
    const res = formatNoData({ s: 'no_data' });
    expect(res).toEqual('No data returned');
  });

  it('formats empty company API response ({})', () => {
    const res = formatNoData({});
    expect(res).toEqual('No data returned');
  });

  it('formats empty company API response ([])', () => {
    const res = formatNoData([]);
    expect(res).toEqual('No data returned');
  });

  it('formats empty financials API response', () => {
    const res = formatNoData(financialsFailed);
    expect(res).toEqual('No data returned');
  });

  it('valid financials API response: does not format', () => {
    const res = formatNoData(financialsRet);
    expect(res).toEqual(financialsRet);
  });
});
