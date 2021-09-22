import React, { useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { RiHome2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import appName from '../../assets/appName.png';
import { NewModal } from '../Modal';

import { Container, Content } from './styles';

const HeaderDashboard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSetModal() {
    setOpenModal(!openModal);
  }
  return (
    <Container>
      <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
      <img src={appName} alt="MayCake" />
      <Content>
        <Link to="/dashboard">
          <RiHome2Line size={22} />
        </Link>

        <FiShoppingCart size={22} color="#c2185b" />

        <FiUser size={22} color="#c2185b" onClick={handleSetModal} />
      </Content>
    </Container>
  );
};

export default HeaderDashboard;
