import React from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';

import appName from '../../assets/appName.png';

import {
  Container,
  Header,
  HeaderContent,
  Config,
  Products,
  Nav,
  Baseboard,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
            <Config>
              <span>Inicio</span>
              <span>Categoria</span>
              <button type="button">
                <FiShoppingCart />
              </button>
              <button type="button">
                <FiUser />
              </button>
            </Config>
          </HeaderContent>
        </Header>
        <Products>
          <Toaster position="top-center" reverseOrder={false} />
          <h1>Sou um produto</h1>
        </Products>
        <Nav>
          <img src={appName} alt="MayCake" />
          <ul>
            <li>
              <a href="/dashboard">Inicio</a>
            </li>
            <li>
              <a href="/#">Categoria</a>
            </li>
            <li>
              <a href="/carrinho">Carrinho</a>
            </li>
            <li>
              <a href="/profile">Perfil</a>
            </li>
          </ul>
        </Nav>
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

export default Dashboard;
