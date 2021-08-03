import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 6px;
  width: 100%;

  display: flex;
  align-items: center;

  font-size: 20px;

  background: #fff;
  color: #c2185b;

  border-radius: 10px;
  border: 2px solid #ec407a;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FFE1E3')};
  }

  svg {
    margin-left: 115px;
    margin-right: 12px;
  }

  @media (max-width: 400px) {
    width: 98%;
    margin-left: 1%;

    svg {
      margin-left: 35%;
    }
  }

  @media (max-width: 380px) {
    width: 90%;
    margin-left: 5%;

    svg {
      margin-left: 33%;
    }
  }
`;
