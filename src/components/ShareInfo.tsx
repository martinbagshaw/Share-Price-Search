import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import ShareChart from './ShareChart';
import { CandlesType, CompanyType, DateRange } from '../types';
import { formatDate } from '../lib/formatDate';
import { formatSharePrice } from '../lib/formatSharePrice';
import { colors, chartColors, font, headingMixin } from '../styles';

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.header`
  border-bottom: 1px solid ${colors.blueDark};
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  ${headingMixin};
`;

const Paragraph = styled.p`
  font-family: ${font};
  font-weight: 200;
  font-size: 1rem;
  color: ${colors.blueDark};
  margin-bottom: 0.35rem;
  strong {
    font-weight: 500;
  }
`;

const Section = styled.section`
  padding: 1rem 0;
  box-sizing: border-box;
`;

const H3 = styled.h3`
  ${headingMixin};
  font-size: 1.125rem;
`;

const Stat = styled.strong<{itemColor: string}>`
  ${({ itemColor }) => itemColor && `color: ${itemColor}`};
`;

type Props = {
  companyInfo: CompanyType;
  dateInfo: DateRange;
  stockInfo: CandlesType;
};
const ShareInfo: FC<Props> = ({ companyInfo, dateInfo, stockInfo }): JSX.Element => {
  const from = formatDate(dateInfo.from, 'chartUi');
  const to = formatDate(dateInfo.to, 'chartUi');
  const shareStats = useMemo(() => formatSharePrice(stockInfo), [stockInfo]);

  return (
    <ShareContainer>
      <Heading>
        <H2>
          Showing data for: <strong>{companyInfo.ticker}</strong>
        </H2>
        <Paragraph>
          Date range: <strong>{from}</strong> to <strong>{to}</strong>
        </Paragraph>
      </Heading>
      {shareStats && (
        <Section>
          <H3>Statistics:</H3>
          {Object.entries(shareStats).map(([key, value]) => (
            <Paragraph key={key}>
              {key}: <Stat itemColor={chartColors[key]}>{value}</Stat>
            </Paragraph>
          ))}
          <ShareChart stockInfo={stockInfo} />
        </Section>
      )}
    </ShareContainer>
  );
};

export default ShareInfo;
