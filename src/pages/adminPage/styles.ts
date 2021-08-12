import styled, { css } from 'styled-components';

import backgroundNav from '../../assets/backgroundNav.png';
import backgroundProduct from '../../assets/backgroundProduct.png';

interface NotifyShow {
  notifyShow: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Menu = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  border-right: 2px solid #fa9898;

  .menuIcons {
    max-width: 100px;
    width: 100px;

    background-color: #fa9898;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: auto;

    div {
      margin-top: 20px;
      justify-content: space-around;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }

  .option {
    background: url(${backgroundNav}) center;
    width: 100%;

    > img {
      margin-top: 33px;
      margin-bottom: 15px;
      height: 30.5px;
      margin-left: 70px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        & + span {
          margin-left: 20px;
        }
      }
    }

    @media (max-width: 500px) {
      > img {
        margin-top: 33px;
        margin-bottom: 15px;
        height: 30.5px;
        margin-left: 7vw;
      }

      div {
        display: flex;
        flex-direction: column;

        span {
          & + span {
            margin-top: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    width: 200px;

    > img {
      margin-top: 33px;
      margin-bottom: 15px;
      height: 30.5px;
      margin-left: 100px;
    }

    div {
      span {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Config = styled.div<NotifyShow>`
  width: 100px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 20px;

  button,
  a {
    margin-top: 35px;
  }

  button {
    background: transparent;
    border: 0;
  }

  > div {
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

  .div-notify {
    position: absolute;
    right: 0;
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
  background: url(${backgroundProduct});
  height: 100%;
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
