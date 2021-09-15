import styled from 'styled-components';

export const Container = styled.div`
  border: 0;
  background: transparent;
`;

export const Content = styled.div`
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 7px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    p {
      font-size: 13px;
      color: #333333;
    }
  }
`;
