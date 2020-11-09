/*
 * formatNoData.ts
 * Inputs: success data from API response
 * Output: 'No data returned' message, or success data from API response
 */
import { CandlesType, CompanyType, FinancialsType, NewsType, Queries } from '../types';

// TODO:
// - input should determin output type
// - see App.tsx, used 'any' type to override
export const formatNoData = (
  data: any,
  query?: keyof Queries
): CandlesType | CompanyType | Array<NewsType> | FinancialsType | string => {
  if (typeof data !== 'object' || !Object.keys(data).length) {
    return 'No data returned';
  }
  // candles specific
  if (query === 'candles' && data.s === 'no_data') {
    return 'No data returned';
  }
  // financials specific
  if (
    query === 'financials' &&
    (!Object.keys(data.metric).length || !Object.keys(data.series).length)
  ) {
    return 'No data returned';
  }
  return data;
};
