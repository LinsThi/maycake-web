import React from 'react';

import { Container, Content } from './styles';

import appName from '../../assets/appName.png';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={appName} alt="MayCake" />
        <ul>
          <li>
            <a href="https://www.instagram.com/mayah.png/">Contato</a>
          </li>
          <li>
            <a href="/carrinho">Carrinho</a>
          </li>
          <li>
            <a href="/profile">Perfil</a>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default NavBar;
