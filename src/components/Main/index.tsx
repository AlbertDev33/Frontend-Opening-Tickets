import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

import Nav from '../Nav';
import PlusButton from '../PlusButton';
import TicketPanel from '../TicketPanel';

import { Container, OpenTicketsText } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Nav />
      <PlusButton />
      <OpenTicketsText>
        <FaBookOpen size={20} />
        Tickets Abertos
      </OpenTicketsText>
      <TicketPanel />
    </Container>
  );
};

export default Main;
