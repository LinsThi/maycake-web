import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import appName from '../../assets/appName.png';

import {
  Container,
  Header,
  HeaderContent,
  Config,
  Content,
  ListProduct,
} from './styles';

import { NewModal } from '../../components/Modal';
import Baseboard from '../../components/Baseboard';

import api from '../../services/api';
import Notify from '../../components/Notify';
import InputSearch from '../../components/InputSearch';
import ProductInfo from '../../components/ProductInfo';
import NavBar from '../../components/NavBar';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  value: string;
  product_url: string;
  visible: boolean;
}

interface FilterProduct {
  name: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filterProduct, setFilterProduct] = useState('');

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  const updateArrayProducts = useCallback(() => {
    api.get('/products/list').then((response) => {
      let productsArray: ProductProps[];
      productsArray = response.data;
      setProducts(
        productsArray
          .sort((product1, product2) => {
            let productOne = product1.name.toLowerCase();
            let productTwo = product2.name.toLowerCase();
            return productOne === productTwo
              ? 0
              : productOne > productTwo
              ? 1
              : -1;
          })
          .filter((product) => product.name.includes(filterProduct)),
      );
    });
  }, [filterProduct]);

  const handleSearchSubmit = useCallback(
    (data: FilterProduct) => {
      setFilterProduct(data.name);
      updateArrayProducts();
    },
    [updateArrayProducts],
  );

  useEffect(() => {
    updateArrayProducts();
  }, [updateArrayProducts]);

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
            <Config>
              <Notify />

              <FiShoppingCart size={22} color="#c2185b" />

              <FiUser size={22} color="#c2185b" onClick={handleSetModal} />
            </Config>
          </HeaderContent>
        </Header>
        <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
        <Toaster position="top-center" reverseOrder={false} />
        <Content>
          <ListProduct>
            <div className="info">
              <div>
                <h2>Todos os produtos</h2>
                <p>
                  {products.filter((product) => product.visible).length}{' '}
                  produtos
                </p>
              </div>
              <Form ref={formRef} onSubmit={handleSearchSubmit}>
                <InputSearch
                  name="name"
                  type="text"
                  icon={FiSearch}
                  placeholder="O que você está buscando?"
                />
              </Form>
            </div>
            <div className="products">
              {products.map(
                (product) =>
                  product.visible && (
                    <ProductInfo
                      key={product.id}
                      id={product.id}
                      img={product.product_url}
                      name={product.name}
                      value={product.value}
                    />
                  ),
              )}
            </div>
          </ListProduct>
        </Content>

        <NavBar />
      </Container>
      <Baseboard />
    </>
  );
};

export default Dashboard;
