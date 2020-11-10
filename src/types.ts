export type ApiRet = {
  error?: string;
  response?: CandlesType | CompanyType | Array<NewsType> | FinancialsType | string;
};

export type CandlesType = {
  c: Array<number>;
  h: Array<number>;
  l: Array<number>;
  o: Array<number>;
  s: string;
  t: Array<number>;
};

export type CandlesTypeReturn = {
  error?: string | undefined;
  response?: CandlesType;
};

export type CompanyType = {
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

export type DateRange = {
  from: number;
  to: number;
};

type FinancialsItem = {
  period: string;
  v: number;
};

export type FinancialsType = {
  series: {
    annual: {
      currentRatio: FinancialsItem[];
      salesPerShare: FinancialsItem[];
      netMargin: FinancialsItem[];
    };
  };
  metric: {
    '10DayAverageTradingVolume': number;
    '52WeekHigh': number;
    '52WeekLow': number;
    '52WeekLowDate': string;
    '52WeekPriceReturnDaily': number;
    beta: number;
  };
  metricType: string;
  symbol: string;
};

export type NewsType = {
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

export type Queries = {
  candles: string;
  companyInfo: string;
  companyNews: string;
  financials: string;
};

export type SearchObject = {
  companyCode?: string;
  dateRange: DateRange;
};
