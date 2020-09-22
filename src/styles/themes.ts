import { Color } from '../types/Color';

const palette = {
  dark1: 'rgb(29, 29, 32)',
  dark2: 'rgb(23, 23, 26)',
  dark3: 'rgb(16, 16, 17)',
  white: 'rgba(255,255,255)',
};

type Theme = {
  background: Color;
  navbar: Color;
  sidebar: Color;
  ['font-normal']: Color;
};

type Themes = {
  DARK: Theme;
};

export const themes: Themes = {
  DARK: {
    background: palette.dark3,
    navbar: palette.dark2,
    sidebar: palette.dark1,
    'font-normal': palette.white,
  },
};
