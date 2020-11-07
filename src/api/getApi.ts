/*
getApi.ts
* Inputs: company code, API query, and to and from date (news and candles API calls)
* Output: Data or error messages

NEXT:
- view to have this and getQuery work with an array of queries.
^ probably want to do this soon - to avoid a load of nested .then()
*/
import axios from 'axios';

import { CandlesRet, CompanyRet, FinancialsObj, NewsObj, Queries } from '../types';
import { getQuery } from './getQuery';
import { formatNoData } from './formatNoData';

type ApiRet = {
  error?: string;
  response?: CandlesRet | CompanyRet | Array<NewsObj> | FinancialsObj | string;
};

export const getApi = async <C, Q extends keyof Queries>(
  companyCode: C | string,
  query: Q,
  fromDate?: number | string,
  toDate?: number | string
): Promise<ApiRet> => {
  const apiQuery = getQuery(companyCode, query, fromDate, toDate);
  if (!apiQuery) {
    return { error: `${query} API does not exist on [getAPI] function` };
  }
  try {
    const response = await axios.get(apiQuery);
    const { data, request, status } = response;
    if (status === 200 && request?.readyState === 4 && data) {
      const formatted = formatNoData(data);
      return { response: formatted };
    }
    return { error: `${query} API error` };
  } catch (error) {
    return { error: `${query} API error` };
  }
};
