import React, { useState, useCallback } from 'react';
import { FiBookOpen, FiFilePlus } from 'react-icons/fi';
import { BiFoodMenu } from 'react-icons/bi';

import { Container, Menu, Content } from './styles';

import FoodOrders from './FoodOrders';
import FoodList from './FoodList';
import FoodRegister from './FoodRegister';
import NavMenu from '../../components/NavMenu';
import Baseboard from '../../components/Baseboard';

const adminPage: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState(0);

  const handleOptionSelected = useCallback((number) => {
    setOptionSelected(number);
  }, []);
  return (
    <>
      <Container>
        <Menu>
          <div className="menuIcons">
            <button type="button" onClick={() => handleOptionSelected(1)}>
              <NavMenu icon={BiFoodMenu}>Pedidos</NavMenu>
            </button>

            <button type="button" onClick={() => handleOptionSelected(2)}>
              <NavMenu icon={FiBookOpen}>Cardápio</NavMenu>
            </button>

            <button type="button" onClick={() => handleOptionSelected(3)}>
              <NavMenu icon={FiFilePlus}>Cadastro</NavMenu>
            </button>
          </div>
        </Menu>
        <Content>
          {optionSelected === 1 && <FoodOrders />}
          {optionSelected === 2 && <FoodList />}
          {optionSelected === 3 && <FoodRegister />}
        </Content>
      </Container>

      <Baseboard />
    </>
  );
};

export default adminPage;
