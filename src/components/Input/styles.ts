import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
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
`;
