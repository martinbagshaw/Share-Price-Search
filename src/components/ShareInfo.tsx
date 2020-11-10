import React, { FC } from 'react';
import styled from 'styled-components';

import { CandlesType, SearchObject } from '../types';
import { formatDate } from '../lib/formatDate';
import { buttonMixin, colors, font } from '../styles';

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.section`
  border-bottom: 1px solid ${colors.blueDark};
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-family: ${font};
  font-weight: 200;
  color: ${colors.blueDark};
  line-height: 1.4;
  margin-bottom: 0.5rem;
  strong {
    font-weight: 500;
  }
`;

const Dates = styled.p`
  font-family: ${font};
  font-weight: 200;
  font-size: 1rem;
  color: ${colors.blueDark};
  margin-bottom: 0.25rem;
  strong {
    font-weight: 500;
  }
`;

const Toggle = styled.input`
  ${buttonMixin};
  align-self: flex-end;
  margin-top: 1rem;
`;

// TODO:
// - averages
// - chart view
// - toggle func
type Props = {
  search: SearchObject;
  stocks: CandlesType;
};
const ShareInfo: FC<Props> = ({ search, stocks }): JSX.Element => {
  const from = formatDate(search.dateRange.from, 'chartUi');
  const to = formatDate(search.dateRange.to, 'chartUi');

  return (
    <ShareContainer>
      <Heading>
        <H2>Showing data for: <strong>{search.companyCode}</strong></H2>
        <Dates>
          Date range: <strong>{from}</strong> to <strong>{to}</strong>
        </Dates>
      </Heading>
      {JSON.stringify(stocks, null, 2)}
    </ShareContainer>
  );
};

export default ShareInfo;

{
  /* https://www.tradingview.com/widget/advanced-chart/ */
}

{
  /* https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=buik82748v6rtf2l9psg */
}
{
  /* https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&from=1572651390&to=1575243390&token=buik82748v6rtf2l9psg */
}

{
  /* <iframe
// src=""

src="https://widget.finnhub.io/widgets/stocks/chart?symbol=IBM&amp;metric=all&amp;from=1572651390&amp;to=1575243390&amp;token=buik82748v6rtf2l9psg&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white"
width="100%"
max-width="1200"
height="400"
frameBorder="0"
></iframe> */
}
