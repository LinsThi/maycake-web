import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .infoProduct {
      display: flex;
      align-items: center;
      align-self: center;
      justify-content: center;
      position: relative;
      width: 170px;

      img {
        height: 120px;
        width: 120px;
        border-radius: 50%;
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

        > input {
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
    }

    .detailsProduct {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;

      .submitProduct {
        border: 0;
        background: #fa9898;
        color: #c2185b;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        transition: 0.4s;
        margin-top: 20px;

        &:hover {
          background: ${shade(0.2, '#FFE1E3')};
          color: #fff;
        }
      }
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
