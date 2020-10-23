import React, { useCallback, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { AuthContext } from '../../hook/AuthContext';
import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, login } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        login({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [login],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
