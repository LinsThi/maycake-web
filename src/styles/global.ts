import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFE1E3;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
