import styled from 'styled-components';

import backgroundNav from '../../assets/backgroundNav.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  padding: 1vw;
  background: #fff;
  &::after {
    display: flex;
    content: '';
    width: 6vw;
    height: 1px;
    background: #fa0a7d;
    margin: 0 4vw;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;

  > img {
    margin-left: 4vw;
    height: 25.5px;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: #c2185b;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Config = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Products = styled.div`
  background: #fff;
  max-height: 60vh;
  height: 60vh;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${backgroundNav}) center;
  border-top: 2px solid #fa9898;

  img {
    height: 5vh;
    margin-top: 8vh;
    margin-bottom: 4vh;
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

export const Baseboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 60px;
  background: #fa9898;
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
