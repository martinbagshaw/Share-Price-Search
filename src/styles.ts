import styled, { css } from 'styled-components';

interface Colors {
  [key: string]: string;
}
export const colors: Colors = {
  black: '#000',
  blueDark: '#16202c',
  blueLight: '#3077c1',
  blueTranslucent: 'rgba(48, 119, 193, 0.1)', //84, 160, 240
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
  green: '#63d471',
  greenDark: '#63a46c',
  greenOlive: '#6a7152',
  grey: '#545454',
  greyMid: '#d5d5d5',
  greyLight: '#f2f2f3',
  red: 'rgb(224, 99, 84)',
  redLight: 'rgb(255, 227, 224)',
  turquoise: '#69fff1',
  turquoiseDark: '00e0Ca',
  white: '#ffffff',
  yellow: 'rgb(252, 187, 84)',
  yellowLight: 'rgb(255, 246, 221)',
};

export const font: string = "'Trispace', Arial, Helvetica, sans-serif";

export const containerMixin = css`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 1200px;
`;

export const buttonMixin = css`
  cursor: pointer;
  border: 0;
  padding: 0.5rem 0.625rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-family: ${font};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${colors.white};
  background-color: ${colors.blueDark};
  transition: all ease-in-out 0.3s;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.blueLight};
  }
  @media screen and (min-width: 480px) {
    font-size: 1rem;
    padding: 0.625rem 1rem;
  }
`;

export const BaseButton = styled.button`
  ${buttonMixin};
`;

export const Error = styled.div`
  width: 100%;
  background-color: ${colors.redLight};
  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  border: 1px solid ${colors.red};
  p {
    font-family: ${font};
    font-size: 1rem;
    color: ${colors.red};
    line-height: 1.4;
  }
`;
