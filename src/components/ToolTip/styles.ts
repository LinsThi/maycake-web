import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #c2185b;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c2185b transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 460px) {
    span {
      width: 90px;
      position: absolute;
      bottom: calc(100% + 8px);
    }
  }

  @media (max-width: 370px) {
    span {
      width: 90px;
      position: absolute;
      bottom: calc(100% + 8px);
    }
  }

  @media (max-width: 340px) {
    span {
      width: 90px;
      position: absolute;
      bottom: calc(100% + 8px);
      left: -20%;

      &::before {
        display: none;
      }
    }
  }
`;
