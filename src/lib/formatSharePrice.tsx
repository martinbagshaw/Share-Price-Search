/*
 * formatSharePrice.ts
 * Inputs: candles success data from API response
 * Output: high, low, and average share price for the given time period
 */

import { CandlesType } from '../types';

type Output = {
  average: number;
  min: number;
  max: number;
};
export const formatSharePrice = (data: CandlesType): Output | void => {
  if (!data || typeof data !== 'object' || !data.h || !data.l) {
    return;
  }
  const sumAverage = (arr: number[]) => {
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  };
  const normalise = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

  const { h, l } = data;
  const avg = (sumAverage(h) + sumAverage(l)) / 2;
  const max = h.length ? normalise(Math.max(...h)) : 0;
  const average = normalise(avg);
  const min = l.length ? normalise(Math.min(...l)) : 0;
  return { max, average, min };
};
