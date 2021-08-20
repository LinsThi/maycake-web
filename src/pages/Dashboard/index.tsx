import React, { useState, useEffect, useCallback } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';

import appName from '../../assets/appName.png';

import {
  Container,
  Header,
  HeaderContent,
  Config,
  Products,
  Nav,
  Notifications,
  Baseboard,
} from './styles';

import { NewModal } from '../../components/Modal';

import api from '../../services/api';

interface NotificationData {
  id: string;
  title: string;
  content: string;
  recipient_id: string;
  read: boolean;
}

const Dashboard: React.FC = () => {
  const [notificationData, setNotificationData] = useState<NotificationData[]>(
    [],
  );
  const [notifyShow, setNotifyShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSetNotifyShow = useCallback(() => {
    setNotifyShow(!notifyShow);
  }, [notifyShow]);

  const handleSetReadNotification = useCallback(
    (id) => {
      api
        .patch('/notifications/update', {
          id,
        })
        .then((response) => {
          setNotificationData(
            notificationData.filter(
              (notification) => notification.id !== response.data.read,
            ),
          );
        });
    },
    [notificationData],
  );

  useEffect(() => {
    api.get('/notifications/show').then((response) => {
      const notifications: NotificationData[] = response.data;

      setNotificationData(
        notifications.filter((notification) => !notification.read),
      );

      if (notificationData.length === 0) {
        setNotifyShow(false);
      }
    });
  }, [notificationData]);

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
            <Config notifyShow={notifyShow}>
              <div>
                <button
                  type="button"
                  className="notify"
                  onClick={handleSetNotifyShow}
                >
                  <BsBell size={20} color="#c2185b" />
                  {notificationData.length !== 0 && !notifyShow && (
                    <span>{notificationData.length}</span>
                  )}
                </button>
                <div className="div-notify">
                  {notifyShow &&
                    notificationData.map((notification) => (
                      <Notifications key={notification.id}>
                        <div>
                          <strong>{notification.title}</strong>
                          <h5>{notification.content}</h5>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleSetReadNotification(notification.id)
                          }
                        >
                          <AiOutlineCloseCircle size={20} color="#5F4CEC" />
                        </button>
                      </Notifications>
                    ))}
                </div>
              </div>

              <button type="button">
                <FiShoppingCart size={20} color="#c2185b" />
              </button>

              <FiUser
                size={20}
                color="#c2185b"
                onClick={handleSetModal}
                className="profileUser"
              />
            </Config>
          </HeaderContent>
        </Header>
        <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
        <Products>
          <Toaster position="top-center" reverseOrder={false} />
          <h1>Sou um produto</h1>
        </Products>
        <Nav>
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
