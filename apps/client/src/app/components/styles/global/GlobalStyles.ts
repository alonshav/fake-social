import { createGlobalStyle, ThemeProps } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  body {
    height: 100%;
    background-color: ${({ theme }:ThemeProps<any>) => theme.backgroundColor.body};
    color: hsl(0, 0%, 19%);
    font-size: 1.15em;
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  p {
    font-weight: 300;
    font-family: Roboto;
  }
`
export default GlobalStyles
