import styled, { css } from 'styled-components';

import ToolTip from '../ToolTip';

interface InputProps {
  isModal: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;
  font-size: 12px;
  background: #e9e9e9;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 10px;
  height: 40px;
  margin-top: 5px;
  width: 100%;

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: 0;
    background: transparent;
    width: 100%;
    margin-bottom: 30px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #4676c2;
    `}

  ${(props) =>
    props.isModal &&
    css`
      margin-top: 10px;
    `}

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
