import React, { FC } from 'react';
import styled from 'styled-components';

import { containerMixin, colors, font } from '../styles';

const AppHeader = styled.div`
  background-color: ${colors.blueDark};
  width: 100%;
`;

const Container = styled.header`
  ${containerMixin};
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-family: ${font};
  color: ${colors.white};
  line-height: 1.4;
  margin-right: 0.75rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const P = styled.p`
  font-family: ${font};
  font-size: 0.875rem;
  color: ${colors.blue};
`;

const Header: FC = (): JSX.Element => (
  <AppHeader>
    <Container>
      <H1>Share Price Finder:</H1>
      <P>Search for a company and retrieve its share data</P>
    </Container>
  </AppHeader>
);

export default Header;
