import Modal from 'react-modal';
import { IoMdCloseCircle } from 'react-icons/io';
import { FiLogOut, FiTool } from 'react-icons/fi';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose }: NewModalProps) {
  const { user, signOut } = useAuth();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdCloseCircle size={20} color="#FC4F4F" />
      </button>
      <Container>
        <div className="infoUser">
          <img src={user.avatar_url} alt={user.name} />
          <h2>Olá {user.name}</h2>
        </div>
        <div className="userOption">
          <a href="/profile">
            <div>
              <FiTool size={20} color="#c2185b" />
              <span>Editar perfil</span>
            </div>
          </a>
          <button type="button" onClick={() => signOut()}>
            <FiLogOut size={20} color="#c2185b" />
            <span>Logout</span>
          </button>
        </div>
      </Container>
    </Modal>
  );
}
