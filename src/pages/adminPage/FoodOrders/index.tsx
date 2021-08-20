import React, { useState, useCallback, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';

import api from '../../../services/api';
import { NewModal } from '../../../components/Modal';

import {
  Container,
  Option,
  Config,
  Content,
  Product,
  Notifications,
} from './styles';

import appName from '../../../assets/appName.png';
import cakeImg from '../../../assets/cake.jpg';

interface NotificationData {
  id: string;
  title: string;
  content: string;
  recipient_id: string;
  read: boolean;
}

const FoodOrders: React.FC = () => {
  const [notificationData, setNotificationData] = useState<NotificationData[]>(
    [],
  );
  const [notifyShow, setNotifyShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectFirstOption, setSelectFirstOption] = useState(false);

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

  function handleSetModal() {
    setOpenModal(!openModal);
  }

  const handleSelectOption = useCallback(() => {
    setSelectFirstOption(!selectFirstOption);
  }, [setSelectFirstOption, selectFirstOption]);

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
    <Container>
      <div className="option">
        <img src={appName} alt="MayCake" />

        <div>
          <Option
            type="button"
            onClick={handleSelectOption}
            disabled={!selectFirstOption}
            isSelected={selectFirstOption}
          >
            Agora
          </Option>
          <Option
            type="button"
            onClick={handleSelectOption}
            disabled={selectFirstOption}
            isSelected={!selectFirstOption}
          >
            Encomendas
          </Option>
        </div>
      </div>
      <Content>
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
                      onClick={() => handleSetReadNotification(notification.id)}
                    >
                      <AiOutlineCloseCircle size={20} color="#5F4CEC" />
                    </button>
                  </Notifications>
                ))}
            </div>
          </div>
          <FiUser size={20} color="#c2185b" onClick={handleSetModal} />
        </Config>
        <NewModal isOpen={openModal} onRequestClose={handleSetModal} />
        <Toaster position="top-center" reverseOrder={false} />
        <Product>
          <img src={cakeImg} alt="chocolate" />
          <div>
            <div className="info">
              <h1>Bolo recheado</h1>
              <p>Pedido feito por: Thiago Lins</p>
              <p>CPF: 000.000.000-00</p>
              <p>Tipo de pagamento: Na entrega</p>
              <p>Troco? Sim, R$ 2,50</p>
            </div>
            <div className="address">
              <h2>Endereço:</h2>
              <p>Rua Antonina do Norte</p>
              <p>Nº 194</p>
              <p>Complemento: Ap 444, Bloco 04</p>
              <p>CEP: 60325-610</p>
            </div>
            <div className="confirmation">
              <button type="button">
                <MdCancel color="#FC4F4F" size={34} />
              </button>
              <button type="button">
                <IoMdCheckmarkCircle color="#3CCB75" size={34} />
              </button>
            </div>
          </div>
        </Product>
      </Content>
    </Container>
  );
};

export default FoodOrders;
