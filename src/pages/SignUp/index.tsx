import React, { useCallback, useRef } from 'react';
import { FiMail, FiKey, FiUser } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
import { AiOutlineIdcard } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationsError';

import { Container, Content, Background, Baseboard } from './styles';
import nameForm from '../../assets/nameForm.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          cpf: Yup.string().required('CPF Obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          password: data.password,
        });

        toast.success('Usuário cadastrado com sucesso');

        history.push('/');
      } catch (err) {
        console.clear();
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast('Usuário já cadastrado com as credenciais', {
            icon: '👀',
          });
        }
      }
    },
    [history],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={nameForm} alt="MayCake" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <Toaster position="top-center" reverseOrder={false} />
            <h1>Faça seu Cadastro</h1>
            <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
            <Input
              name="cpf"
              type="text"
              pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
              icon={AiOutlineIdcard}
              placeholder="CPF"
            />
            <Input
              name="email"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiKey}
              changeIcon
              placeholder="Senha"
            />
            <Button type="submit" icon={BiLogInCircle}>
              Cadastrar
            </Button>
            <div id="down">
              <Link to="/" id="alter">
                Já tem uma conta? Faça o login clicando <strong>aqui</strong>
              </Link>
            </div>
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

export default SignIn;
