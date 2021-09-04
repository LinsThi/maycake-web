import styled from 'styled-components';
import { shade } from 'polished';

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
  margin-left: 60px;
  margin-top: 30px;

  h1 {
    color: #cb3c68;
  }

  .buttonPagination {
    width: 20px;
    height: 20px;
    background: #fce9e9;
    border: 1px solid #cb3c68;
    border-radius: 5px;

    color: #cb3c68;

    & + button {
      margin-left: 5px;
    }
    margin-bottom: 10px;

    &:hover {
      background: ${shade(0.2, '#FFE1E3')};
    }
  }
`;

export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;

  .lineOne,
  .lineTwo,
  .lineTree {
    display: flex;
  }

  .lineOne,
  .lineTwo {
    margin-bottom: 20px;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 105px;

  background: #fff;
  border: 1px solid #cb3c68;
  border-radius: 7px;
  position: relative;

  svg {
    cursor: pointer;
  }

  .productInfo {
    width: 200px;
    svg {
      margin-top: 10px;
    }
  }

  .productEdit {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 5px;
      background: #fce9e9;
      border: 1px solid #cb3c68;
      border-radius: 5px;
    }

    img {
      margin-left: 20px;
      right: 50px;
      width: 68px;
      height: 68px;
    }
  }

  &::before {
    position: absolute;
    height: 68px;
    width: 1px;
    left: 70%;
    top: 17.5px;
    content: ' ';
    background: #fa9898;
  }

  & + div {
    margin-left: 40px;
  }
`;
