import React, { FC, Fragment } from 'react';
import { Line } from '@reactchartjs/react-chart.js';
import styled from 'styled-components';

import { CandlesType } from '../types';
import { formatChartData } from '../lib/formatChartData';
import { headingMixin } from '../styles';

const H3 = styled.h3`
  ${headingMixin};
  font-size: 1.125rem;
  margin-top: 2rem;
`;

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
};

type Props = {
  stockInfo: CandlesType;
};
const ShareChart: FC<Props> = ({ stockInfo }): JSX.Element => {
  const data = formatChartData(stockInfo);
  return (
    <Fragment>
      <H3>Chart:</H3>
      {data && <Line type="line" data={data} options={options} />}
    </Fragment>
  );
};
export default ShareChart;
