import styled, { css } from 'styled-components';

import backgroundNav from '../../../assets/backgroundNav.png';

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .option {
    background: url(${backgroundNav}) center;
    border-right: 2px solid #bf7d8c;
    width: 240px;

    > img {
      margin-top: 33px;
      margin-bottom: 15px;
      height: 28px;
      margin-left: 60px;
    }

    .options {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        & + button {
          margin-left: 20px;
        }
      }
    }

    .infoOrders {
      display: flex;
      flex-direction: column;
      button {
        border: 0;
        background: transparent;

        span {
          margin-left: 15px;
          color: #9d9d9d;
          cursor: pointer;
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

export const Config = styled.div`
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
  margin-top: 15px;

  button {
    background: transparent;
    border: 0;
  }

  > div {
    top: 3px;
  }

  svg {
    cursor: pointer;
    margin-left: 20px;
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
