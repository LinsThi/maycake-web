import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiKey } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationsError';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Background, Baseboard } from './styles';
import nameForm from '../../assets/nameForm.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });
      } catch (err) {
        console.clear();
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('E-mail/Senha incorreto');
        }
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={nameForm} alt="MayCake" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <Toaster position="top-center" reverseOrder={false} />
            <h1>Faça seu Login</h1>
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
            <Button type="submit" icon={BiLogInCircle} loading={loading}>
              Entrar
            </Button>
            <div id="down">
              <a href="/#">Esqueci minha senha</a>
              <Link to="/signup" id="alter">
                Não tem conta? Crie uma clicando <strong>aqui</strong>
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
