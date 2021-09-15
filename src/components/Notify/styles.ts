import styled from 'styled-components';

interface NotifyShow {
  notifyShow: boolean;
}

export const Container = styled.div<NotifyShow>`
  position: relative;
  align-self: center;

  span {
    position: absolute;
    background: #ab0c2c;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    right: -7px;
    font-size: 12px;
    bottom: 0;
    color: #fff;
  }

  button {
    background: transparent;
    border: 0;
  }

  svg {
    cursor: pointer;
  }

  .div-notify {
    position: absolute;
    right: 0;
  }
`;

export const Content = styled.div`
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
