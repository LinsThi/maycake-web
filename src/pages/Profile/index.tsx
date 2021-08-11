import React, { useCallback, useRef, ChangeEvent } from 'react';
import { FiMail, FiKey, FiUser, FiCamera, FiLogOut } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
import { RiHome2Line } from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationsError';

import appName from '../../assets/appName.png';

import {
  Container,
  Content,
  Baseboard,
  Header,
  HeaderContent,
  Config,
  AvatarInput,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface FormData {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { user, updateUser, signOut } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          oldPassword: Yup.string(),
          newPassword: Yup.string().when('oldPassword', {
            is: (val: string) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          confirmPassword: Yup.string()
            .when('oldPassword', {
              is: (val: string) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('newPassword'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, oldPassword, newPassword } = data;

        const formData = {
          name,
          email,
          ...(oldPassword
            ? {
                oldPassword,
                newPassword,
              }
            : {}),
        };

        const response = await api.put('/users', formData);

        toast.success('Usuário atualizado com sucesso');

        updateUser(response.data);
        history.push('/dashboard');
      } catch (err) {
        console.clear();
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('ERROR: E-mail já existente ou senha antiga incorreta.');
        }
      }
    },
    [history, updateUser],
  );

  const handleUpdateAvatar = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);
          toast.success('Avatar atualizado com sucesso');
        });
      }
    },
    [updateUser],
  );

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={appName} alt="MayCake" />
            <Config>
              <a href="/dashboard">
                <RiHome2Line size={20} />
              </a>

              <button type="button" onClick={() => signOut()}>
                <FiLogOut />
              </button>
            </Config>
          </HeaderContent>
        </Header>
        <Content>
          <Form
            onSubmit={handleSubmit}
            ref={formRef}
            initialData={{ name: user.name, email: user.email }}
          >
            <Toaster position="top-center" reverseOrder={false} />

            <AvatarInput>
              <img src={user.avatar_url} alt={user.name} />
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" onChange={handleUpdateAvatar} />
              </label>
            </AvatarInput>
            <h1>Meu perfil</h1>

            <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
            <Input
              name="email"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />

            <Input
              name="oldPassword"
              icon={FiKey}
              changeIcon
              placeholder="Senha atual"
            />
            <Input
              name="newPassword"
              icon={FiKey}
              changeIcon
              placeholder="Nova senha"
            />
            <Input
              name="confirmPassword"
              icon={FiKey}
              changeIcon
              placeholder="Confirmar senha nova"
            />
            <Button type="submit" icon={BiLogInCircle}>
              Alterar
            </Button>
          </Form>
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

export default Profile;
