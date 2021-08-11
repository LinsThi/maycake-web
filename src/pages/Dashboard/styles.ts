import styled, { css } from 'styled-components';

import backgroundNav from '../../assets/backgroundNav.png';

interface NotifyShow {
  notifyShow: boolean;
}

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
  }
`;

export const Config = styled.div<NotifyShow>`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;

  > div {
    margin-right: 18px;
    position: relative;
    align-self: center;

    span {
      position: absolute;
      background: #ab0c2c;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      left: 10px;
      font-size: 12px;
      bottom: 0;
      color: #fff;
    }
  }

  button {
    & + button {
      margin-left: 20px;
    }
  }

  a {
    text-decoration: none;
    color: #c2185b;
    margin-left: 20px;
    margin-right: 20px;
  }

  .div-notify {
    position: absolute;
    right: 1px;
    margin-top: 7px;

    ${(props) =>
      props.notifyShow &&
      css`
        &::after {
          content: '';
          border-style: solid;
          border-color: #c2185b transparent;
          border-width: 10px 10px 0 10px;
          bottom: 100%;
          position: absolute;
          right: 0;
        }
      `}
  }
`;

export const Notifications = styled.div`
  background: #fa9898;
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.2s;

  div {
    margin-right: auto;
    margin-left: 5px;
  }

  svg {
    cursor: pointer;
    right: auto;
    margin-right: 10px;
  }

  &:hover {
    transform: translateX(10px);
  }
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
    height: 33px;
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
