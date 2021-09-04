import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  img {
    margin-left: 35px;
    margin-top: 25px;
    height: 25.5px;
  }

  &::after {
    display: flex;
    content: '';
    width: 6vw;
    height: 1px;
    background: #fa0a7d;
    margin: 0 4vw;
  }
`;

export const Config = styled.div`
  svg {
    margin-top: 25px;
    margin-right: 35px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-left: 150px;
  margin-top: 60px;
  > h2 {
    color: #c2185b;
    margin-bottom: 10px;
  }
`;

export const Product = styled.div`
  display: flex;
  width: 900px;
  height: 470px;
  background: #fff;
  border: 1px solid #cb3c68;
  border-radius: 7px;

  form {
    display: flex;

    .productInfo {
      width: 320px;
      display: flex;
      flex-direction: column;
      margin-left: 60px;
      margin-top: 40px;

      h2 {
        color: #cb3c68;
        font-size: 20px;
      }

      .descProduct,
      .valueProduct {
        margin-top: 5px;
      }

      .coin {
        display: flex;
        text-align: center;

        h3 {
          padding-top: 10px;
          margin-top: 5px;
          border-radius: 5px;
          background: #e9e9e9;
          margin-right: 5px;
          color: #cb3c68;
          width: 40px;
          height: 40px;
        }
      }
    }

    .productImg {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
      margin-top: 40px;

      h2 {
        color: #cb3c68;
        font-size: 20px;
      }

      label {
        background: #e9e9e9;
        width: 400px;
        height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 5px;

        border: 0;
        border-radius: 7px;

        svg,
        p {
          color: #cb3c68;
        }

        p {
          font-size: 20px;
        }

        input {
          display: none;
        }
      }

      .submitProduct {
        margin-top: auto;
        margin-left: auto;
        margin-bottom: 17px;
        border: 0;
        background: #fa9898;
        color: #c2185b;
        width: 100px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
`;
