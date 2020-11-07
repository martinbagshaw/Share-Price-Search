import axios from 'axios';
import { cleanup } from '@testing-library/react';
import { getApi } from './getApi';
import { candlesRet, newsRet } from './apiTestData';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const newsApiResponse = {
  config: {
    url:
      'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-11-06&to=2020-11-06&token=buik82748v6rtf2l9psg',
    method: 'get',
    timeout: 0,
  },
  data: newsRet,
  headers: { 'content-type': 'application/json; charset=utf-8' },
  request: { readyState: 4, timeout: 0, withCredentials: false },
  status: 200,
  statusText: 'OK',
};

describe('getApi tests', () => {
  it('getApi: invalid apiType entered', async () => {
    const companyCode = 'APPL';
    const apiType = 'news';
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ response: candlesRet }));

    // @ts-ignore
    await expect(getApi(companyCode, apiType)).resolves.toEqual({
      error: 'news API does not exist on [getAPI] function',
    });
  });

  it('getApi: returns an error message if the promise rejects', async () => {
    const errorMessage = { error: 'companyInfo API error' };
    const companyCode = 'APPL';
    const apiType = 'companyInfo';
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    await expect(getApi(companyCode, apiType)).resolves.toEqual(errorMessage);
  });

  it('getApi: news API returns the correct data', async () => {
    const companyCode = 'APPL';
    const apiType = 'companyNews';
    const from = 1572651390;
    const to = 1575243390;
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(newsApiResponse));

    const res = await getApi(companyCode, apiType, from, to);
    expect(res).toEqual({ response: newsRet });
  });
});
