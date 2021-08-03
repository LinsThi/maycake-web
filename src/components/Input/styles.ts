import styled, { css } from 'styled-components';

import ToolTip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  width: 100%;
  border: 1px solid #a5a5a5;
  background: #fff;
  font-size: 12px;
  padding: 9px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 28px;
  }

  svg {
    margin-left: 12px;
    margin-right: 10px;
    color: #cb3c68;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #4676c2;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #c2185b;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
  }

  #ocult {
    background: transparent;
    border: 0;
    display: flex;
  }

  @media (max-width: 400px) {
    width: 98%;
    margin-left: 1%;
  }

  @media (max-width: 380px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const Error = styled(ToolTip)`
  height: 18px;
  margin-left: 12px;

  svg {
    margin: 0;
  }
`;
