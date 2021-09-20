import styled from 'styled-components';

import backgroundProduct from '../../assets/backgroundProduct.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Menu = styled.div`
  width: 82px;
  height: 100%;
  display: flex;

  button {
    background: transparent;
    border: 0;
  }

  .menuIcons {
    max-width: 100px;
    width: 100px;

    background-color: #bf7d8c;
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
  background-image: url(${backgroundProduct});
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
