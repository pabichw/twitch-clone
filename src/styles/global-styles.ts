import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

const createCssVariables = theme =>
  Object.keys(theme).map(key => `--${key}: ${theme[key]};`);

export const GlobalStyle = createGlobalStyle`
  * {
    ${createCssVariables(themes.DARK)}
    
    ::selection {
      background: var(--primaryLight);
    }
    ::-moz-selection {
      background: var(--primaryLight); /* Gecko Browsers */
    }
  }
  
  button {
    border: 0;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: 100%;
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
    font-family: inherit;
    font-size: inherit;
    margin: 0;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
