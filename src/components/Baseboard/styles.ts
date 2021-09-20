import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 60px;
  background: #bf7d8c;
  color: #fff;

  cursor: default;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-height: 510px) {
    display: none;
  }
`;
