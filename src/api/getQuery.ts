/*
 * getQuery.ts
 * Inputs: company code, API query, and to and from date (news and candles API calls)
 * Output: API query string, or undefined
 */
import { Queries } from '../types';
import { formatDate } from '../lib/formatDate';
const apiKey = process.env.API_KEY || 'TEST_API_KEY';

export const getQuery = <C, Q extends keyof Queries>(
  companyCode: C | string,
  query: Q,
  fromDate?: number,
  toDate?: number
): string | undefined => {
  const from = formatDate(fromDate, query);
  const to = formatDate(toDate, query);
  const api = 'https://finnhub.io/api/v1/';
  const obj: Queries = {
    candles: `${api}stock/candle?symbol=${companyCode}&resolution=D&from=${from}&to=${to}&token=${apiKey}`,
    companyInfo: `${api}stock/profile2?symbol=${companyCode}&token=${apiKey}`,
    companyNews: `${api}company-news?symbol=${companyCode}&from=${from}&to=${to}&token=${apiKey}`,
    financials: `${api}stock/metric?symbol=${companyCode}&metric=all&token=${apiKey}`,
  };
  return obj[query];
};
