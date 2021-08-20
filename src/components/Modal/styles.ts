import styled from 'styled-components';

export const Container = styled.form`
  .infoUser {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 10px;
      margin-top: 30px;
      color: #c2185b;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }

  .userOption {
    margin-top: 30px;

    a {
      text-decoration: none;

      div {
        display: flex;

        span {
          color: #c2185b;
          margin-left: 10px;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    button {
      margin-top: 20px;
      background: transparent;
      border: 0;
      display: flex;

      span {
        color: #c2185b;
        margin-left: 10px;
      }

      &:hover {
        filter: brightness(0.9);
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
