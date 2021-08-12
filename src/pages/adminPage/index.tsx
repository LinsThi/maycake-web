import React, { useState, useEffect, useCallback } from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBell, BsBook } from 'react-icons/bs';
import { BiFoodMenu } from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';

import appName from '../../assets/appName.png';

import {
  Container,
  Menu,
  Content,
  Config,
  Products,
  Notifications,
  Baseboard,
} from './styles';
import { useAuth } from '../../hooks/auth';

import NavMenu from '../../components/NavMenu';
import api from '../../services/api';

interface NotificationData {
  id: string;
  title: string;
  content: string;
  recipient_id: string;
  read: boolean;
}

const adminPage: React.FC = () => {
  const { signOut } = useAuth();
  const [notificationData, setNotificationData] = useState<NotificationData[]>(
    [],
  );
  const [notifyShow, setNotifyShow] = useState(false);

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

  return (
    <>
      <Container>
        <Menu>
          <div className="menuIcons">
            <NavMenu icon={BiFoodMenu}>Pedidos</NavMenu>

            <NavMenu icon={BsBook}>Cardápio</NavMenu>
          </div>
          <div className="option">
            <img src={appName} alt="MayCake" />

            <div>
              <span>Agora</span>
              <span>Encomendas</span>
            </div>
          </div>
        </Menu>
        <Content>
          <Products>
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
              <a href="/profile">
                <FiUser size={20} color="#c2185b" />
              </a>
              <button type="button" onClick={() => signOut()}>
                <FiLogOut size={20} color="#c2185b" />
              </button>
            </Config>
            <Toaster position="top-center" reverseOrder={false} />
            <h1>AdminPage</h1>
          </Products>
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
