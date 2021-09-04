import styled, { css } from 'styled-components';

import ToolTip from '../ToolTip';

interface TextAreaProps {
  isModal: boolean;
  isErrored: boolean;
}

export const Container = styled.div<TextAreaProps>`
  display: flex;
  align-items: center;
  background: #e9e9e9;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  margin-top: 5px;

  textarea {
    background: transparent;
    resize: none;
    width: 100%;
    height: 160px;
    border: 0;
    color: #000;
    font-weight: 500;
    padding: 10px;
    margin-bottom: 10px;
    ${(props) =>
      props.isModal &&
      css`
        width: 320px;
      `}
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
`;

export const Error = styled(ToolTip)`
  height: 18px;
  margin-right: 10px;

  svg {
    margin: 0;
  }
`;
