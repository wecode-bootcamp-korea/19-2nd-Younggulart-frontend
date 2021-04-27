import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexJustCenter = css`
  display: flex;
  justify-content: center;
`;
export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const Theme = {
  fontSizeSmall: '13px',
  fontSizeMedium: '20px',
  fontSizeLarge: '40px',
  fontWeightMedium: '400',
  fontWeightBold: '600',
  primaryColor: '#D5A770',
  gray: '#474747',
  black: '#333333',
  bgColor: '#F8F8F8',
  flexCenter,
  flexJustCenter,
  flexAlignCenter,
};

export default Theme;
