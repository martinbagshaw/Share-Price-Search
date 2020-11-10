import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ShareInfo from './ShareInfo';
import { candlesTestData } from '../api/apiTestData';

afterEach(cleanup);

const searchTest = {
  companyCode: 'AAPL',
  dateRange: {
    from: 1572651390,
    to: 1575243390,
  },
};

describe('ShareInfo component tests', () => {
  it('renders text', () => {
    const { getByText } = render(
      <ShareInfo search={searchTest} stocks={candlesTestData} />
    );
    const text = getByText('AAPL');
    expect(text).toBeInTheDocument();
  });
});
