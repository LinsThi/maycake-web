import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

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

  button {
    background: transparent;
    border: 0;
  }
`;

export const Config = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: #c2185b;
    margin-right: 15px;
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
