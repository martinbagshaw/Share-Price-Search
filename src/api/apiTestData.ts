export const CandlesType = {
  c: [217.68, 221.03, 219.89],
  h: [222.49, 221.5, 220.94],
  l: [217.19, 217.1402, 218.83],
  o: [221.03, 218.55, 220],
  s: 'ok',
  t: [1569297600, 1569384000, 1569470400],
  v: [33463820, 24018876, 20730608],
};

export const CompanyType = {
  country: 'US',
  currency: 'USD',
  exchange: 'NASDAQ NMS - GLOBAL MARKET',
  finnhubIndustry: 'Technology',
  ipo: '1980-12-12',
  logo: 'https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png',
  marketCapitalization: 1979619,
  name: 'Apple Inc',
  phone: '14089961010',
  shareOutstanding: 17102.536,
  ticker: 'AAPL',
  weburl: 'https://www.apple.com/',
};

const newsRetObj = {
  category: 'company',
  datetime: 1604689751,
  headline:
    'Apple November event preview: Apple Silicon MacBook Air and Pro, Big Sur release, more - 9to5Mac',
  id: 61068472,
  image:
    'https://9to5mac.com/wp-content/uploads/sites/6/2020/11/maxresdefault-17.jpg?quality=82&strip=all',
  related: 'AAPL',
  source: 'https://9to5mac.com',
  summary:
    'After previous events focused on iPad, Apple Watch, and iPhone, Apple’s November event will likely focus on the Apple Silicon transition in the Mac lineup.',
  url: 'https://9to5mac.com/2020/11/06/apple-november-event-apple-silicon/',
};

const newsRetObj2 = {
  category: 'company',
  datetime: 1604682372,
  headline: 'Concept imagines new 24-inch and 32-inch iMac with edge-to-edge design - 9to5Mac',
  id: 61068473,
  image: 'https://9to5mac.com/wp-content/uploads/sites/6/2020/11/hotovo1-.jpg?quality=82&strip=all',
  related: 'AAPL',
  source: 'https://9to5mac.com',
  summary:
    'While the first Apple Silicon Macs introduced next week will likely not include a new iMac, reports currently suggest that Apple is working on a redesigned iMac with Apple Silicon inside. Today, a new concept from Svetapple imagines what a redesigned iMac could look like. Reliable Apple analyst Ming-Chi Kuo has said several times that […]',
  url: 'https://9to5mac.com/2020/11/06/redesigned-imac-concept/',
};

export const newsRet = [newsRetObj, newsRetObj2];

export const financialsRet = {
  series: {
    annual: {
      currentRatio: [
        {
          period: '2019-09-28',
          v: 1.5401,
        },
        {
          period: '2018-09-29',
          v: 1.1329,
        },
      ],
      salesPerShare: [
        {
          period: '2019-09-28',
          v: 55.9645,
        },
        {
          period: '2018-09-29',
          v: 53.1178,
        },
      ],
      netMargin: [
        {
          period: '2019-09-28',
          v: 0.2124,
        },
        {
          period: '2018-09-29',
          v: 0.2241,
        },
      ],
    },
  },
  metric: {
    '10DayAverageTradingVolume': 32.50147,
    '52WeekHigh': 310.43,
    '52WeekLow': 149.22,
    '52WeekLowDate': '2019-01-14',
    '52WeekPriceReturnDaily': 101.96334,
    beta: 1.2989,
  },
  metricType: 'all',
  symbol: 'AAPL',
};
