import React from 'react';
import { FiMail, FiKey } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';

import { Container, Content, Background, Baseboard } from './styles';
import nameForm from '../../assets/nameForm.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={nameForm} alt="MayCake" />

          <form>
            <h1>Faça seu login</h1>
            <Input
              name="E-mail"
              type="text"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input name="Senha" icon={FiKey} changeIcon placeholder="Senha" />
            <Button type="submit" icon={BiLogInCircle}>
              Entrar
            </Button>
            <div id="down">
              <a href="/#">Esqueci minha senha</a>
              <a href="/#" id="alter">
                Não tem conta? Crie uma clicando <strong>aqui</strong>
              </a>
            </div>
          </form>
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
