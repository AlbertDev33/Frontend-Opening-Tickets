import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        alert('E-mail de recuperação enviado!');

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } finally {
        setLoading(false);
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar Senha</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button loading={Number(!!loading)} type="submit">
            Recuperar
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Página Inicial
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
