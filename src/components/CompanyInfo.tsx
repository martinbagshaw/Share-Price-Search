import React, { FC } from 'react';
import styled from 'styled-components';

import { CompanyType } from '../types';
import { colors, font } from '../styles';

const CompanySection = styled.section`
  margin: 1rem 0;
  padding: 1rem 0;
  box-sizing: border-box;
  border-top: 1px solid ${colors.blueDark};
  @media screen and (min-width: 480px) {
    display: flex;
  }
`;

const Identity = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 480px) {
    margin-right: 1rem;
    margin-bottom: 0;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-width: 5rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 480px) {
    margin: 0 auto 0.5rem;
  }
`;

const H2 = styled.h2`
  font-family: ${font};
  font-weight: 500;
  color: ${colors.blueDark};
  line-height: 1.4;
`;

const H3 = styled.h3`
  font-family: ${font};
  font-weight: 500;
  font-size: 1.125rem;
  color: ${colors.black};
  margin-bottom: 0.5rem;
`;

const Details = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  font-family: ${font};
  font-weight: 200;
  font-size: 0.875rem;
  color: ${colors.black};
  margin-bottom: 0.25rem;
  strong {
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;

const Search: FC<CompanyType> = ({
  country,
  currency,
  exchange,
  finnhubIndustry,
  ipo,
  logo,
  name,
  ticker,
}): JSX.Element => (
  <CompanySection>
    <Identity>
      <Logo src={logo} alt={name} />
      <H2>{ticker}</H2>
    </Identity>
    <Details>
      <H3>{name}</H3>
      <Ul>
        <Li>
          <strong>Country:</strong>
          {country}
        </Li>
        <Li>
          <strong>Currency</strong>
          {currency}
        </Li>
        <Li>
          <strong>Exchange:</strong>
          {exchange}
        </Li>
        <Li>
          <strong>Industry:</strong>
          {finnhubIndustry}
        </Li>
        <Li>
          <strong>Public Incorporation:</strong> {ipo}
        </Li>
      </Ul>
    </Details>
  </CompanySection>
);

export default Search;
