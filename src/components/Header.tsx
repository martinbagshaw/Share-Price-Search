import React, { FC } from 'react';
import styled from 'styled-components';

import { containerMixin, colors, font } from '../styles';

const FixedHeader = styled.div`
  background-color: ${colors.blueDark};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 3.5rem;
`;

const Container = styled.header`
  ${containerMixin};
`;

const H1 = styled.h1`
  font-family: ${font};
  color: ${colors.white};
  line-height: 1.4;
`;

const Header: FC = (): JSX.Element => (
  <FixedHeader>
    <Container>
      <H1>Share Price Finder</H1>
    </Container>
  </FixedHeader>
);

export default Header;
