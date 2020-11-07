export type CandlesRet = {
  c: Array<number>;
  h: Array<number>;
  l: Array<number>;
  o: Array<number>;
  s: string;
  t: Array<number>;
};

export type CompanyRet = {
  country: string;
  currency: string;
  exchange: string;
  finnhubIndustry: string;
  ipo: string;
  logo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
};

export type CandlesObj = {
  c: Array<number>;
  h: Array<number>;
  l: Array<number>;
  o: Array<number>;
  s: string;
  t: Array<number>;
};

export type NewsObj = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

type FinancialsItem = {
  period: string,
  v: number,
};
export type FinancialsObj = {
  series: {
    annual: {
      currentRatio: FinancialsItem[];
      salesPerShare: FinancialsItem[];
      netMargin: FinancialsItem[];
    },
  },
  metric: {
    '10DayAverageTradingVolume': number,
    '52WeekHigh': number,
    '52WeekLow': number,
    '52WeekLowDate': string,
    '52WeekPriceReturnDaily': number,
    beta: number,
  },
  metricType: string;
  symbol: string;
};

export type CandlesReturn = {
  error?: string | undefined;
  response?: CandlesObj;
};

export type Queries = {
  candles: string;
  companyInfo: string;
  companyNews: string;
  financials: string;
};
