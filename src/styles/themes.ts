import { Color } from '../types';

export const fontSizes = {
  regular: '12px',
  regular2: '14px',
  big: '18px',
};

export const fontWeights = {
  regular: 400,
  bold: 600,
};

export const palette = {
  dark1: 'rgb(29, 29, 32)',
  dark2: 'rgb(23, 23, 26)',
  dark3: 'rgb(16, 16, 17)',
  gray1: 'rgba(255, 255, 255, 0.15)',
  gray2: 'rgba(255, 255, 255, 0.2)',
  offWhite: 'rgb(239, 239, 241)',
  white: 'rgb(255,255,255)',
  twitchPurple: 'rgb(145, 71, 255)',
  twitchPurple2: '#772ce8',
};

type Theme = {
  primary: Color;
  primaryHover: Color;
  secondary: Color;
  secondaryHover: Color;
  background: Color;
  navbar: Color;
  sidebar: Color;
  ['font-normal']: Color;
  ['separator-color']: Color;
};

type Themes = {
  DARK: Theme;
};

export const themes: Themes = {
  DARK: {
    primary: palette.twitchPurple,
    primaryHover: palette.twitchPurple2,
    secondary: palette.gray1,
    secondaryHover: palette.gray2,
    background: palette.dark3,
    navbar: palette.dark2,
    sidebar: palette.dark1,
    'font-normal': palette.offWhite,
    'separator-color': palette.gray1,
  },
};
