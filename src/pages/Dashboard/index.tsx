import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import { Container, Content, Tickets } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../hook/AuthContext';

interface FindFormData {
  id: string;
  subject: string;
  message: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useContext(AuthContext);

  const [tickets, setTickets] = useState<FindFormData[]>([]);

  const handleSubmit = useCallback(async () => {
    await api.get('/tickets');
  }, []);

  useEffect(() => {
    api.get('/tickets').then((response) => {
      setTickets(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Dashboard. Bem vindo {user.name}</h1>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="pesquisar" placeholder="Digite aqui" />

          <Button type="submit">Pesquisar</Button>
        </Form>

        <Tickets>
          {tickets.map((ticket) => (
            <Link key={ticket.id} to="/">
              <div>
                <strong>{ticket.id}</strong>
                <p>{ticket.subject}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))}
        </Tickets>
      </Content>
    </Container>
  );
};

export default Dashboard;
