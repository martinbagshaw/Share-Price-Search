import React, { FC } from 'react';
import styled from 'styled-components';

import { CandlesType, CompanyType, DateRange } from '../types';
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

type Props = {
  companyInfo: CompanyType;
  dateInfo: DateRange;
  stockInfo: CandlesType;
};
const ShareInfo: FC<Props> = ({ companyInfo, dateInfo, stockInfo }): JSX.Element => {
  const from = formatDate(dateInfo.from, 'chartUi');
  const to = formatDate(dateInfo.to, 'chartUi');

  return (
    <ShareContainer>
      <Heading>
        <H2>
          Showing data for: <strong>{companyInfo.ticker}</strong>
        </H2>
        <Dates>
          Date range: <strong>{from}</strong> to <strong>{to}</strong>
        </Dates>
      </Heading>
      {JSON.stringify(stockInfo, null, 2)}
    </ShareContainer>
  );
};

export default ShareInfo;
