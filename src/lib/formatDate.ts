/*
 * formatDate.ts
 * Inputs: 13 digit number (unix timestamp with seconds), string query
 * Output: formatted date to match the API request:
 *         - 'YYYY-MM-DD' for company news
 *         - 10 digit string for candles
 */
import dayjs from 'dayjs';
export const formatDate = (date: number | undefined, query: string): string | undefined => {
  if (date && date.toString().length !== 13) {
    return;
  }
  if (query === 'companyNews' && date) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  if (query === 'candles' && date) {
    return dayjs(date).unix().toString();
  }
  if (query === 'chartUi' && date) {
    return dayjs(date).format('DD-MM-YYYY');
  }
  return;
};
