/*
 * formatNoData.ts
 * Inputs: success data from API response
 * Output: undefined, or success data from API response
 */
import { CandlesType, CompanyType, FinancialsType, NewsType, Queries } from '../types';

// TODO:
// - input should determine output type (Generics)
// - see App.tsx, used 'any' type to override
export const formatNoData = (
  data: any,
  query?: keyof Queries
): CandlesType | CompanyType | Array<NewsType> | FinancialsType | undefined => {
  if (typeof data !== 'object' || !Object.keys(data).length) {
    return;
  }
  // candles specific
  if (query === 'candles' && data.s === 'no_data') {
    return;
  }
  // financials specific
  if (
    query === 'financials' &&
    (!Object.keys(data.metric).length || !Object.keys(data.series).length)
  ) {
    return;
  }
  return data;
};
