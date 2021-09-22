import styled from 'styled-components';

import backgroundNav from '../../assets/backgroundNav.png';

export const Container = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${backgroundNav}) center;
  border-top: 2px solid #bf7d8c;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 33px;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  ul {
    display: flex;

    li {
      list-style: none;
      margin-bottom: 62px;

      & + li {
        margin-left: 15px;
      }

      a {
        text-decoration: none;
        color: #cb3c68;
      }
    }
  }
`;
