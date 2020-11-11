import { cleanup } from '@testing-library/react';

import { formatSharePrice } from './formatSharePrice';
import { candlesTestData } from '../api/apiTestData';

afterEach(cleanup);

describe('formatSharePrice tests', () => {
  it('returns undefined if falsy input is given', () => {
    // @ts-ignore
    const res = formatSharePrice(0);
    expect(res).toEqual(undefined);
  });
  it('returns undefined if "h" or "l" properties not present', () => {
    // @ts-ignore
    const res = formatSharePrice({
      c: [3.4, 5.5],
      t: [1.22, 4.33],
      o: [12, 21, 3],
      v: [1, 2, 3],
    });
    expect(res).toEqual(undefined);
  });

  it('returns 0 for all outputs if "h" and "l" properties have empty arrays', () => {
    const res = formatSharePrice({
      c: [3.4, 5.5],
      h: [],
      l: [],
      o: [12, 21, 3],
      s: 'ok',
      t: [1.22, 4.33],
      v: [1.2323, 2.232, 3],
    });
    expect(res).toEqual({ average: 0, min: 0, max: 0 });
  });

  it('returns correct average, min, and max for candlesTestData', () => {
    const res = formatSharePrice(candlesTestData);
    expect(res).toEqual({ average: 219.68, max: 222.49, min: 217.14 });
  });
});
