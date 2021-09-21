import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useProduct } from '../../hooks/product';

import { Container, Content } from './styles';

interface ProductInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  name: string;
  value: string;
  id: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ img, name, value, id }) => {
  const { searchProduct } = useProduct();

  const handleSelectProduct = useCallback(() => {
    searchProduct({ id });
  }, [searchProduct, id]);

  return (
    <Container type="button" onClick={handleSelectProduct}>
      <Link to="/product">
        <Content>
          <img src={img} alt="bolo de choco" />
          <h3>{name}</h3>
          <span>R$ {value}</span>
        </Content>
      </Link>
    </Container>
  );
};

export default ProductInfo;
