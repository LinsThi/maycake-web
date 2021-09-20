import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #a5a5a5;
  background: #fff;

  width: 500px;
  height: 42px;
  border: 1px solid #cb3c68;
  border-radius: 7px;
  padding: 10px;

  margin-bottom: 25px;

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

  button {
    border: 0;
    background: transparent;
  }
`;
