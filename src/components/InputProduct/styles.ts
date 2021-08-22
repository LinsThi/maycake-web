import styled from 'styled-components';

import ToolTip from '../ToolTip';

export const Container = styled.div`
  background: #fff;
  font-size: 12px;

  input {
    width: 300px;
    background: #e9e9e9;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
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
