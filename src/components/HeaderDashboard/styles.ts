import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 76px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: #fff;

  > img {
    margin-left: 45px;
    height: 25.5px;
  }

  button {
    background: transparent;
    border: 0;
  }

  &::before {
    position: absolute;
    display: flex;
    content: '';
    width: 80px;
    height: 1px;
    background: #fa0a7d;
    bottom: 24.5px;
    left: 55px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #c2185b;
    margin-right: 10px;
  }

  svg {
    cursor: pointer;

    & + svg {
      margin-left: 10px;
    }
  }
`;
