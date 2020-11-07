/*
formatNoData.ts
- handles missing data from an ok API response
- returns a normalised response (string), or passes ok data through
 */

import { CandlesRet, CompanyRet, FinancialsObj, NewsObj } from '../types';

export const formatNoData = (
  data: any
): CandlesRet | CompanyRet | Array<NewsObj> | FinancialsObj | string => {
  if (typeof data !== 'object' || !Object.keys(data).length) {
    return 'No data returned';
  }
  // candles specific
  if (!Array.isArray(data) && data.s === 'no_data') {
    return 'No data returned';
  }
  // financials specific
  if (!Array.isArray(data) && (!Object.keys(data.metric).length || !Object.keys(data.series).length)) {
    return 'No data returned';
  }
  return data;
};
