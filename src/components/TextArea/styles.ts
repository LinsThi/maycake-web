import styled from 'styled-components';

import ToolTip from '../ToolTip';

export const Container = styled.div`
  background: #fff;
  font-size: 12px;

  textarea {
    resize: none;
    width: 300px;
    height: 150px;
    background: #e9e9e9;
    border: 10px;
    border-radius: 5px;
    margin-bottom: 30px;
    color: #000;
    font-weight: 500;
    padding: 10px;
  }
`;

export const Error = styled(ToolTip)`
  height: 18px;
  margin-left: 12px;

  svg {
    margin: 0;
  }
`;
