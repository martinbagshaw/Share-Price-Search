import { cleanup } from '@testing-library/react';

import { formatChartData } from './formatChartData';
import { candlesTestData, candlesNoAvgTestData } from '../api/apiTestData';

afterEach(cleanup);

const noAverage = {
  labels: ['24-09-2019', '25-09-2019', '26-09-2019'],
  datasets: [
    {
      label: 'max',
      data: [222.49, 221.5],
      fill: false,
      backgroundColor: `#63d471`,
      borderColor: `#adffb8`,
    },
    {
      label: 'min',
      data: [217.19, 217.1402, 218.83],
      fill: false,
      backgroundColor: `rgb(224, 99, 84)`,
      borderColor: `rgb(255, 227, 224)`,
    },
  ],
};

const success = {
  labels: ['24-09-2019', '25-09-2019', '26-09-2019'],
  datasets: [
    {
      label: 'max',
      data: [222.49, 221.5, 220.94],
      fill: false,
      backgroundColor: `#63d471`,
      borderColor: `#adffb8`,
    },
    {
      label: 'average',
      data: [219.84, 219.3201, 219.885],
      fill: false,
      backgroundColor: `#3077c1`,
      borderColor: `#6fb4fc`,
    },
    {
      label: 'min',
      data: [217.19, 217.1402, 218.83],
      fill: false,
      backgroundColor: `rgb(224, 99, 84)`,
      borderColor: `rgb(255, 227, 224)`,
    },
  ],
};

describe('formatChartData tests', () => {
  it('returns undefined if falsy input is given', () => {
    // @ts-ignore
    const res = formatChartData(0);
    expect(res).toEqual(undefined);
  });
  it('returns min and max with no average, if min and max data lengths are different', () => {
    const res = formatChartData(candlesNoAvgTestData);
    expect(res).toEqual(noAverage);
  });
  it('returns correct average, min, and max for candlesTestData', () => {
    const res = formatChartData(candlesTestData);
    expect(res).toEqual(success);
  });
});
