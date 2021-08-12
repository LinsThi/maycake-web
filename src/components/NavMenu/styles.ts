import styled, { css } from 'styled-components';

interface ButtonProps {
  isFocused: boolean;
}

export const Div = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60px;
  width: 60px;

  ${(props) =>
    props.isFocused &&
    css`
      border-radius: 20%;
      background: #ffcccc;
    `};

  & + Div {
    margin-top: 50px;
  }
`;

export const Container = styled.button`
  background: transparent;
  border: 0;

  svg,
  p {
    color: #c2185b;
    cursor: pointer;
  }

  p {
    margin-top: 5px;
  }
`;
