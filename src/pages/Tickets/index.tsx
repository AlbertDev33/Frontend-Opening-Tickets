import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import api from '../../services/api';

interface RegisterTicket {
  subject: string;
  message: string;
}

const Ticket: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: RegisterTicket) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          subject: Yup.string().required('Título obrigatório'),
          message: Yup.string().required('O campo menssagem é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/tickets', data);

        history.push('/');

        alert('Ticket cadastrado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Background>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="subject" placeholder="Título" />
            <TextArea name="message" placeholder="Mensagem" />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">Página Inicial</Link>
        </Content>
      </Background>
    </Container>
  );
};

export default Ticket;
