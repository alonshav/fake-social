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
    background-color: ${({ theme }:ThemeProps<any>) => theme.background.body};
    color: ${({ theme }:ThemeProps<any>) => theme.color['black-main']};;
    font-size: 1.15em;
    font-family: ${({ theme }) => theme.fonts.main};
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    font-family: Roboto;
    word-spacing: 3px;
  }
`
export default GlobalStyles
