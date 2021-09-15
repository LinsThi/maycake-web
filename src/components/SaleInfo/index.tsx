import React, { ButtonHTMLAttributes } from 'react';

import { Container, Content } from './styles';

interface SaleInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  nameProduct: string;
  nameClient: string;
}

const SaleInfo: React.FC<SaleInfoProps> = ({
  img,
  nameProduct,
  nameClient,
}) => {
  return (
    <Container>
      <Content>
        <img src={img} alt={nameProduct} />
        <div>
          <h3>{nameProduct}</h3>
          <p>Cliente: {nameClient}</p>
        </div>
      </Content>
    </Container>
  );
};

export default SaleInfo;
