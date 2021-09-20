import styled, { keyframes } from 'styled-components';

import backgroundSignIn from '../../assets/backgroundSignIn.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } 
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  animation: ${appearFromRight} 1s;
  img {
    width: 200px;
  }

  form {
    min-width: 280px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #c2185b;
    }

    #down {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      a {
        color: #a5a5a5;
        text-decoration: none;

        strong {
          color: #c2185b;
          text-decoration: underline;
        }

        & + a {
          margin-top: 16px;
        }
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`;
