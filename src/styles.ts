import styled, { css } from 'styled-components';

interface Colors {
  [key: string]: string;
}
const colors: Colors = {
  blueDark: '#233329',
  blueLight: '#3077c1',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
  green: '#63d471',
  greenDark: '#63a46c',
  greenOlive: '#6a7152',
  grey: '#545454',
  greyMid: '#d5d5d5',
  greyLight: '#f2f2f3',
  turquoise: '#69fff1',
  turquoiseDark: '00e0Ca',
  white: '#ffffff'
}

const font: string = '\'Trispace\', Arial, Helvetica, sans-serif';

const containerMixin = css`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 1200px;
`;

const buttonMixin = css`
  cursor: pointer;
  border: 0;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-family: ${font};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  color: ${colors.white};
  background-color: ${colors.blueDark};
  transition: all ease-in-out 0.3s;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.blueLight};
  }
`;
const BaseButton = styled.button`
  ${buttonMixin};
`;

export { colors, font, containerMixin, buttonMixin, BaseButton }