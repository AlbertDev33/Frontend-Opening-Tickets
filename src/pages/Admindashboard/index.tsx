import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPower } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import {
  Container,
  HeaderContainer,
  Header,
  HeaderContent,
  Content,
  Tickets,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../hook/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

interface FindTicketData {
  ticket_id: string;
}

interface FindFormData {
  id: string;
  subject: string;
  message: string;
}

const Admindashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, logOut } = useContext(AuthContext);

  const [tickets, setTickets] = useState<FindFormData[]>([]);
  const [ticketId, setTicketId] = useState<FindTicketData>(
    {} as FindTicketData,
  );
  const [display, setDisplay] = useState(true);

  const handleLogOut = useCallback(() => {
    logOut();
  }, [logOut]);

  const handleSubmit = useCallback(async ({ ticket_id }: FindTicketData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        ticket_id: Yup.string()
          .min(36, 'Insira um id válido')
          .max(36, 'Insira um id válido')
          .required('Insira um id válido'),
      });

      await schema.validate(
        { ticket_id },
        {
          abortEarly: false,
        },
      );

      await api.get<FindFormData>(`tickets/${ticket_id}`);

      setDisplay(false);

      setTicketId({ ticket_id });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err);

        formRef.current?.setErrors(error);
      }
    }
  }, []);

  useEffect(() => {
    api.get('/tickets').then(response => {
      setTickets(response.data);
    });
  }, []);

  return (
    <>
      <HeaderContainer>
        <Header>
          <HeaderContent>
            <h1> Admin Painel Bem vindo(a) {user.name}</h1>
            <button type="button" onClick={handleLogOut}>
              <FiPower size={20} />
            </button>
          </HeaderContent>
        </Header>
      </HeaderContainer>
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="ticket_id" placeholder="Digite aqui o id do ticket" />

            <Button type="submit">Pesquisar</Button>
          </Form>

          <Link to="/tickets">Criar um chamado</Link>
          <Tickets>
            {display ? (
              tickets.map(ticket => (
                <Link key={ticket.id} to={`/edit/${ticket.id}`}>
                  <div>
                    <strong>{ticket.id}</strong>
                    <p>{ticket.subject}</p>
                  </div>

                  <FiChevronRight size={20} />
                </Link>
              ))
            ) : (
              <Link key={ticketId.ticket_id} to={`/edit/${ticketId.ticket_id}`}>
                <div>
                  <strong>{ticketId.ticket_id}</strong>
                </div>
              </Link>
            )}
          </Tickets>
        </Content>
      </Container>
    </>
  );
};

export default Admindashboard;
