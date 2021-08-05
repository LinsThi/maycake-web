import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

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
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;

  a {
    text-decoration: none;
    color: #c2185b;
    margin-right: 25px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } 
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  animation: ${appearFromLeft} 1s;

  form {
    min-width: 280px;
    width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 12px;
    }

    #down {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 170px;
  align-self: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 20px;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #fa9898;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#fa9898')};
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
