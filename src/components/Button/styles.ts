import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isSmall?: boolean;
}

export const Container = styled.button<ButtonProps>`
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 6px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  background: #fff;
  color: #c2185b;

  border-radius: 10px;
  border: 2px solid #ec407a;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FFE1E3')};
  }

  .loading {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #c2185b;
    height: 25px;
    width: 25px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  ${(props) =>
    props.isSmall &&
    css`
      width: 60%;
      margin-left: 30px;
      svg {
        margin-right: 10px;
      }
    `}

  @media (max-width: 400px) {
    width: 98%;
    margin-left: 1%;

    svg {
      margin-left: 35%;
    }
  }

  @media (max-width: 380px) {
    width: 90%;
    margin-left: 5%;

    svg {
      margin-left: 33%;
    }
  }
`;
