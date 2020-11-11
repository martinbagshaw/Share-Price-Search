/*
 * formatChartData.ts
 * Inputs: candles success data from API response
 * Output: labels and datasets for the chart
 */

import { CandlesType } from '../types';
import { formatDate } from './formatDate';
import { chartColors } from '../styles';

type Dataset = {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
};
type Output = {
  labels: string[];
  datasets: Dataset[];
};
export const formatChartData = (data: CandlesType): Output | void => {
  if (
    !data ||
    typeof data !== 'object' ||
    !data.h?.length ||
    !data.l?.length ||
    !data.t?.length
  ) {
    return;
  }
  const averageItems = (high: number[], low: number[]): number[] => {
    const ret: number[] = [];
    high.forEach((i: number, idx: number) => {
      ret.push((i + low[idx]) / 2);
    });
    return ret;
  };
  const labels = data.t.map((timestamp) => {
    const fullTimestamp = new Date(timestamp * 1000).getTime();
    return formatDate(fullTimestamp, 'chartUi');
  });

  const { h, l } = data;
  const keys = h.length === l.length ? ['max', 'average', 'min'] : ['max', 'min'];

  type Arrays = {
    [key: string]: number[];
  };
  const arrays: Arrays = {
    max: h,
    average: averageItems(h, l),
    min: l,
  };

  const datasets = keys.map((item) => {
    return {
      label: item,
      data: arrays[item],
      fill: false,
      // @ts-ignore
      backgroundColor: chartColors[item],
      // @ts-ignore
      borderColor: chartColors[`${item}Light`],
    };
  });
  // @ts-ignore
  return { labels, datasets };
};
