import styled from 'styled-components';

import backgroundNav from '../../assets/backgroundNav.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  height: 70px;
  padding: 10px;
  background: #fff;

  &::after {
    display: flex;
    content: '';
    width: 80px;
    height: 1px;
    background: #fa0a7d;
    margin: 0 45px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;

  > img {
    margin-left: 45px;
    height: 25.5px;
  }
`;

export const Config = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 500px; // TODO: Arrumar o calc para altura
`;

export const ListProduct = styled.div`
  margin-left: 55px;
  margin-right: 110px;

  .info {
    display: flex;
    position: relative;
    align-items: center;

    h2 {
      color: #cb3c68;
    }

    p {
      color: #cfcfcf;
    }

    form {
      display: flex;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 260px);
    overflow-y: auto;

    margin-top: 45px;

    div + div {
      margin-left: 45px;
    }

    div:nth-child(6n) {
      margin-left: 0;
    }

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const Nav = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${backgroundNav}) center;
  border-top: 2px solid #fa9898;

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
