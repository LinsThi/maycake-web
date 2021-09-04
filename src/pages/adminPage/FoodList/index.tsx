import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiUser, FiSearch } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputSearch from '../../../components/InputSearch';
import { NewModal } from '../../../components/Modal';
import { ModalProduct } from '../../../components/ModalProduct';

import {
  Container,
  Header,
  HeaderContent,
  Config,
  Content,
  ProductsInfo,
  Product,
} from './styles';

import appName from '../../../assets/appName.png';

import api from '../../../services/api';
import { useProduct } from '../../../hooks/product';

interface ProductProps {
  id: string;
  name: string;
  value: string;
  product_url: string;
}

interface FilterProduct {
  name: string;
}

const FoodList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [openModal, setOpenModal] = useState(false);
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterProduct, setFilterProduct] = useState('');

  const { searchProduct } = useProduct();

  const pages = Math.ceil(products.length / 9);
  const startIndex = currentPage * 9;
  const endIndex = startIndex + 9;

  const currentProducts = products
    .slice(startIndex, endIndex)
    .sort()
    .filter((product) => product.name.includes(filterProduct));

  const handleSetModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const handleSetModalProduct = useCallback(() => {
    setOpenModalProduct(!openModalProduct);
  }, [openModalProduct]);

  const handleSelectProduct = useCallback(
    (id) => {
      searchProduct({ id });
      handleSetModalProduct();
    },
    [searchProduct, handleSetModalProduct],
  );

  const handleFilterProduct = useCallback((data: FilterProduct) => {
    setFilterProduct(data.name);
  }, []);

  const handleSetPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    api.get('/products/list').then((response) => {
      setProducts(response.data);
    });
  }, [openModalProduct, filterProduct]);

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
          </HeaderContent>
          <Config>
            <FiUser size={20} color="#c2185b" onClick={handleSetModal} />
          </Config>
        </Header>
      </Container>
      <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
      <ModalProduct
        isOpen={openModalProduct}
        onRequestClose={handleSetModalProduct}
      />
      <Content>
        <h1>Cardápio</h1>

        <Form ref={formRef} onSubmit={handleFilterProduct}>
          <InputSearch
            name="name"
            type="text"
            icon={FiSearch}
            placeholder="Buscar item do cardápio"
          />
        </Form>

        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              key={index}
              type="button"
              style={currentPage === index ? { background: '#fa9898' } : {}}
              value={index}
              className="buttonPagination"
              onClick={() => handleSetPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <ProductsInfo>
          <div className="lineOne">
            {currentProducts.slice(0, 3).map((product) => (
              <Product key={product.id}>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <h3>{product.value}</h3>
                  <BsEye size={20} color="#cb3c68" />
                </div>
                <div className="productEdit">
                  <MdEdit
                    size={20}
                    color="#cb3c68"
                    onClick={() => {
                      handleSelectProduct(product.id);
                    }}
                  />
                  <img src={product.product_url} alt={product.name} />
                </div>
              </Product>
            ))}
          </div>

          <div className="lineTwo">
            {currentProducts.slice(3, 6).map((product) => (
              <Product key={product.id}>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <h3>{product.value}</h3>
                  <BsEye size={20} color="#cb3c68" />
                </div>
                <div className="productEdit">
                  <MdEdit
                    size={20}
                    color="#cb3c68"
                    onClick={() => {
                      handleSelectProduct(product.id);
                    }}
                  />
                  <img src={product.product_url} alt={product.name} />
                </div>
              </Product>
            ))}
          </div>

          <div className="lineTree">
            {currentProducts.slice(6, 9).map((product) => (
              <Product key={product.id}>
                <div className="productInfo">
                  <h3>{product.name}</h3>
                  <h3>{product.value}</h3>
                  <BsEye size={20} color="#cb3c68" />
                </div>
                <div className="productEdit">
                  <MdEdit
                    size={20}
                    color="#cb3c68"
                    onClick={() => {
                      handleSelectProduct(product.id);
                    }}
                  />
                  <img src={product.product_url} alt={product.name} />
                </div>
              </Product>
            ))}
          </div>
        </ProductsInfo>
      </Content>
    </>
  );
};

export default FoodList;
