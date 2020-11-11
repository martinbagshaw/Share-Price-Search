import React from 'react';
import { cleanup, render } from '@testing-library/react';

import ShareInfo from './ShareInfo';
import { companyTestData } from '../api/apiTestData';

afterEach(cleanup);

const dateInfo = {
  from: 1572651390,
  to: 1575243390,
};

describe('ShareInfo component tests', () => {
  it('renders company code', () => {
    const { getByText } = render(
      // @ts-ignore
      <ShareInfo
        companyInfo={companyTestData}
        dateInfo={dateInfo}
      />
    );
    const text = getByText('AAPL');
    expect(text).toBeInTheDocument();
  });
});
