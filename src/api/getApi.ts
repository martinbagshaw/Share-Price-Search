/*
 * getApi.ts
 * Inputs: company code, API query, and to and from date (news and candles API calls)
 * Output: Data or error messages
 */
import axios from 'axios';

import { ApiRet, Queries } from '../types';
import { getQuery } from './getQuery';

export const getApi = async <C, Q extends keyof Queries>(
  companyCode: C | string,
  query: Q,
  fromDate?: number,
  toDate?: number
): Promise<ApiRet> => {
  const apiQuery = getQuery(companyCode, query, fromDate, toDate);
  if (!apiQuery) {
    return { error: `${query} API does not exist on [getAPI] function` };
  }
  try {
    const { data } = await axios.get(apiQuery);
    return { response: data };
  } catch (error) {
    return { error: `${query} API error` };
  }
};
