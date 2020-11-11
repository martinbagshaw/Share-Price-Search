import styled, { css } from 'styled-components';

interface Colors {
  [key: string]: string;
}
export const colors: Colors = {
  black: '#000',
  blue: '#3077c1',
  blueLight: '#6fb4fc',
  blueDark: '#16202c',
  blueTranslucent: 'rgba(48, 119, 193, 0.1)', //84, 160, 240
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
  green: '#63d471',
  greenLight: '#adffb8',
  grey: '#545454',
  greyMid: '#d5d5d5',
  greyLight: '#f2f2f3',
  red: 'rgb(224, 99, 84)',
  redLight: 'rgb(255, 227, 224)',
  white: '#ffffff',
};

export const chartColors = {
  max: colors.green,
  maxLight: colors.greenLight,
  average: colors.blue,
  averageLight: colors.blueLight,
  min: colors.red,
  minLight: colors.redLight,
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
    background-color: ${colors.blue};
  }
  @media screen and (min-width: 480px) {
    font-size: 1rem;
    padding: 0.625rem 1rem;
  }
`;

export const BaseButton = styled.button`
  ${buttonMixin};
`;

export const headingMixin = css`
  font-family: ${font};
  font-weight: 200;
  color: ${colors.blueDark};
  line-height: 1.4;
  margin-bottom: 0.5rem;
  strong {
    font-weight: 500;
  }
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
