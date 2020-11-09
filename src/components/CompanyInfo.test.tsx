import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { CompanyType } from '../types';
import CompanyInfo from './CompanyInfo';

afterEach(cleanup);

const ibmInfo = {
  country: 'US',
  currency: 'USD',
  exchange: 'NEW YORK STOCK EXCHANGE, INC.',
  finnhubIndustry: 'Technology',
  ipo: '1915-11-11',
  logo: 'https://static.finnhub.io/logo/4d20c7a4-8279-11ea-a30f-00000000092a.png',
  marketCapitalization: 103307.1,
  name: 'International Business Machines Corp',
  phone: '19144991900',
  shareOutstanding: 890.578748,
  ticker: 'IBM',
  weburl: 'https://www.ibm.com/us-en/?ar=1',
};

const renderComponent = (ibmInfo: CompanyType) => {
  return render(<CompanyInfo {...ibmInfo} />);
};

describe('CompanyInfo component tests', () => {
  it('renders the expected company logo and alt text', async () => {
    renderComponent(ibmInfo);
    const logo = screen.getByAltText('International Business Machines Corp');
    expect(logo).toHaveAttribute(
      'src',
      'https://static.finnhub.io/logo/4d20c7a4-8279-11ea-a30f-00000000092a.png'
    );
    expect(logo).toBeInTheDocument();
  });
});
