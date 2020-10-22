import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu login</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </form>
      <FiLogIn />
      <a href="/">Criar conta</a>
    </Content>
    <Background />
  </Container>
);

export default Login;
