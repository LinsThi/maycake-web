import { createGlobalStyle } from 'styled-components';

import backgroundProduct from '../assets/backgroundProduct.png';

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

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.7);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        background: url(${backgroundProduct}) center;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
