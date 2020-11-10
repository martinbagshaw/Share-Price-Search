import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ShareInfo from './ShareInfo';
import { candlesTestData, companyTestData } from '../api/apiTestData';

afterEach(cleanup);

const dateInfo = {
  from: 1572651390,
  to: 1575243390,
};

describe('ShareInfo component tests', () => {
  it('renders text', () => {
    const { getByText } = render(
      <ShareInfo
        companyInfo={companyTestData}
        dateInfo={dateInfo}
        stockInfo={candlesTestData}
      />
    );
    const text = getByText('AAPL');
    expect(text).toBeInTheDocument();
  });
});
