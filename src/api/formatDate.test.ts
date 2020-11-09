import { cleanup } from '@testing-library/react';
import { formatDate } from './formatDate';

afterEach(cleanup);

describe('formatDate tests', () => {
  it('formats companyNews API date', () => {
    const res = formatDate(1604169031817, 'companyNews');
    expect(res).toEqual('2020-10-31');
  });
  it('returns undefined if date is not 12 digits long', () => {
    const res = formatDate(16041690318, 'companyNews');
    expect(res).toEqual(undefined);
  });
  it('formats candles API date', () => {
    const res = formatDate(1604773831817, 'candles');
    expect(res).toEqual('1604773831');
  });
});
