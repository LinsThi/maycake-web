import React, { useState, useCallback } from 'react';
import { FiBookOpen, FiFilePlus } from 'react-icons/fi';
import { BiFoodMenu } from 'react-icons/bi';

import { Container, Menu, Content, Baseboard } from './styles';

import FoodOrders from './FoodOrders';
import NavMenu from '../../components/NavMenu';

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
          {optionSelected === 2 && <h3>Sou a opção 2</h3>}
          {optionSelected === 3 && <h3>Sou a opção 3</h3>}
        </Content>
      </Container>
      <Baseboard>
        <strong>&copy; May Cake - Todos os direitos reservados</strong>
        <p>
          &lt;/&gt; Desenvolvido por{' '}
          <a href="https://github.com/LinsThi" target="blank">
            Lins
          </a>
        </p>
      </Baseboard>
    </>
  );
};

export default adminPage;