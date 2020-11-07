/*
getQuery.ts
* Inputs: company code, API query, and to and from date (news and candles API calls)
* Output: API query string, or undefined
*/

import dayjs from 'dayjs';

import { Queries } from '../types';
const apiKey = process.env.API_KEY || 'TEST_API_KEY';

export const getQuery = <C, Q extends keyof Queries>(
  companyCode: C | string,
  query: Q,
  fromDate?: number | string,
  toDate?: number | string
): string | undefined => {
  let from = fromDate;
  let to = toDate;
  if (query === 'companyNews') {
    from = dayjs(fromDate).format('YYYY-MM-DD');
    to = dayjs(toDate).format('YYYY-MM-DD');
  }
  const api = 'https://finnhub.io/api/v1/';
  const obj: Queries = {
    candles: `${api}stock/candle?symbol=${companyCode}&resolution=D&from=${from}&to=${to}&token=${apiKey}`,
    companyInfo: `${api}stock/profile2?symbol=${companyCode}&token=${apiKey}`,
    companyNews: `${api}company-news?symbol=${companyCode}&from=${from}&to=${to}&token=${apiKey}`,
    financials: `${api}stock/metric?symbol=${companyCode}&metric=all&token=${apiKey}`,
  };
  return obj[query];
};
