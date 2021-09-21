import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background: transparent;

  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #f479a4;
    margin-bottom: 5px;
  }

  span {
    color: #cb3c68;
    margin-bottom: 40px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 7px;
  }
`;
