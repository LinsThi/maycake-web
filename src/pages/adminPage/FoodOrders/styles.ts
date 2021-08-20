import styled, { css } from 'styled-components';

import backgroundNav from '../../../assets/backgroundNav.png';

interface NotifyShow {
  notifyShow: boolean;
}

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .option {
    background: url(${backgroundNav}) center;
    border-right: 2px solid #fa9898;
    width: 240px;

    > img {
      margin-top: 33px;
      margin-bottom: 15px;
      height: 28px;
      margin-left: 60px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        & + button {
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
`;

export const Option = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: 0;

  ${(props) =>
    !props.isSelected &&
    css`
      color: #cb3c68;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      color: #a5a5a5;
    `}

  &::after {
    display: flex;
    content: '';
    width: 100px;
    height: 1px;
    background: #fa0a7d;
    margin: 0 0vw;
  }
`;

export const Config = styled.div<NotifyShow>`
  width: 100px;

  display: flex;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 35px;

  button {
    background: transparent;
    border: 0;
  }

  svg {
    cursor: pointer;
    margin-left: 20px;
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

export const Content = styled.div`
  height: 100%;
  flex: 1;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10%;
  margin-left: 25%;

  img {
    width: 300px;
    height: 300px;
    border-radius: 2%;
  }

  div {
    margin-left: 20px;

    .address {
      margin-top: 20px;
    }

    p {
      margin-top: 5px;
    }

    .confirmation {
      margin-top: 16px;
      margin-left: 10px;

      button {
        background: transparent;
        border: 0;
      }
    }
  }
`;
