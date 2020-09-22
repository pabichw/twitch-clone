import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

const createCssVariables = theme =>
  Object.keys(theme).map(key => `--${key}: ${theme[key]};`);

export const GlobalStyle = createGlobalStyle`
  * {
    ${createCssVariables(themes.DARK)}
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: var(--background);
    color: var(--font-normal);
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
