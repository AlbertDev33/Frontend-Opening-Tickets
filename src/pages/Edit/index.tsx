import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

interface TicketParams {
  id: string;
}

interface FindFormData {
  subject: string;
  message: string;
}

const Edit: React.FC = () => {
  const [ticket, setTicket] = useState<FindFormData | null>(null);

  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<TicketParams>();
  const history = useHistory();

  useEffect(() => {
    api.get(`/tickets/${params.id}`).then(response => {
      setTicket(response.data);
    });
  }, [params.id]);

  const handleSubmit = useCallback(
    async (data: FindFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          subject: Yup.string().required('Título obrigatório'),
          message: Yup.string().required('O campo menssagem é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch<FindFormData>(`/tickets/${params.id}`, data);

        history.push('/');

        alert('Ticket alterado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);
        }
      }
    },
    [params.id, history],
  );

  return (
    <>
      {ticket && (
        <Container>
          <Content>
            <h1>Edite seu ticket aqui</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input defaultValue={ticket.subject} name="subject" readOnly />
              <TextArea defaultValue={ticket.message} name="message" />

              <Button type="submit">Alterar</Button>
            </Form>
            <Link to="/">
              <FiArrowLeft size={16} /> Página Inicial
            </Link>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Edit;
