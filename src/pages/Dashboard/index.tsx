import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Tickets } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <Container>
        <Content>
          <Form onSubmit={() => {}}>
            <Input name="pesquisar" placeholder="Digite aqui" />

            <Button type="submit">Pesquisar</Button>
          </Form>

          <Tickets>
            <Link to="/">
              <div>
                <strong>Id do chamado</strong>
                <p>Título do chamado</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          </Tickets>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
