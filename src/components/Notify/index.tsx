import React, { useCallback, useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Container, Content } from './styles';

import api from '../../services/api';

interface NotificationData {
  id: string;
  title: string;
  content: string;
  recipient_id: string;
  read: boolean;
}

const Notify: React.FC = () => {
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
    <Container notifyShow={notifyShow}>
      <button type="button" className="notify" onClick={handleSetNotifyShow}>
        <BsBell size={22} color="#c2185b" />
        {notificationData.length !== 0 && !notifyShow && (
          <span>{notificationData.length}</span>
        )}
      </button>
      <div className="div-notify">
        {notifyShow &&
          notificationData.map((notification) => (
            <Content key={notification.id}>
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
            </Content>
          ))}
      </div>
    </Container>
  );
};

export default Notify;
