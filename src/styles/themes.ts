import { Color } from '../types';

export const fontSizes = {
  small: '11px',
  regular: '12px',
  regular2: '14px',
  big: '18px',
  huge: '36px',
};

export const fontWeights = {
  regular: 400,
  bold: 600,
  superBold: 700,
};

export const palette = {
  dark1: 'rgb(29, 29, 32)',
  dark2: 'rgb(23, 23, 26)',
  dark3: 'rgb(16, 16, 17)',
  darkTransparent: 'rgba(0,0,0,0.7)',
  black: 'rgb(0,0,0)',
  gray1: 'rgba(255, 255, 255, 0.15)',
  gray2: 'rgba(255, 255, 255, 0.2)',
  gray3: 'rgb(173, 173, 184)',
  offWhite: 'rgb(239, 239, 241)',
  white: 'rgb(255,255,255)',
  whiteTransparent: 'rgba(255,255,255,0.7)',
  twitchPurple: 'rgb(145, 71, 255)',
  twitchPurple2: '#772ce8',
  twitchPurpleLight: 'rgb(169, 112, 255)',
  dangerRed: 'rgb(233, 25, 22)',
  fadeRed: '#f65855',
};

type Theme = {
  primary: Color;
  primaryHover: Color;
  primaryLight: Color;
  secondary: Color;
  secondaryHover: Color;
  ['input-background']: Color;
  background: Color;
  navbar: Color;
  sidebar: Color;
  placeholder: Color;
  ['placeholder-bckg']: Color;
  ['placeholder-bckg2']: Color;
  ['font-normal']: Color;
  ['font-secondary']: Color;
  ['separator-color']: Color;
  ['separator-color2']: Color;

  ['chip-bckg']: Color;
  ['chip-bckg-hover']: Color;
  ['chip-color']: Color;

  ['main-loader-bckg']: Color;
  ['main-loader-spinner']: Color;
  ['live-bckg']: Color;
  ['live-text']: Color;
};

type Themes = {
  DARK: Theme;
};

export const themes: Themes = {
  DARK: {
    primary: palette.twitchPurple,
    primaryHover: palette.twitchPurple2,
    primaryLight: palette.twitchPurpleLight,
    secondary: palette.gray1,
    secondaryHover: palette.gray2,
    background: palette.dark3,
    'input-background': palette.gray2,
    placeholder: palette.dark2,
    'placeholder-bckg': palette.dark1,
    'placeholder-bckg2': palette.dark2,
    navbar: palette.dark2,
    sidebar: palette.dark1,
    'font-normal': palette.offWhite,
    'font-secondary': palette.gray3,
    'separator-color': palette.gray1,
    'separator-color2': `rgba(255, 255, 255, 0.1)`,
    'chip-bckg': 'rgba(255, 255, 255, 0.15)',
    'chip-bckg-hover': 'rgba(255, 255, 255, 0.2)',
    'chip-color': palette.whiteTransparent,
    'main-loader-bckg': palette.black,
    'main-loader-spinner': palette.gray1,
    'live-bckg': palette.dangerRed,
    'live-text': palette.fadeRed,
  },
};
