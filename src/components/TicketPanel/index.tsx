import React from 'react';

import profileImage from '../../assets/profile.png';
import {
  Container,
  MenuTicket,
  HeaderTitle,
  BodyData,
  Identifier,
  Subject,
  Message,
  Accountable,
  Status,
  Condition,
} from './styles';

const TicketPanel: React.FC = () => {
  return (
    <Container>
      <MenuTicket>
        {/* <img src={profileImage} alt="Profile" /> */}
        <HeaderTitle>
          <Identifier>Identificador</Identifier>
          <Subject>Assunto</Subject>
          <Message>Mensagem</Message>
          <Accountable>Responsável</Accountable>
          <Status>Status</Status>
          <Condition>Condição</Condition>
        </HeaderTitle>
        <BodyData>
          <span>123456</span>
          <span>Teste de front End</span>
          <span>Testando recuração de dados no frontend</span>
          <span>Albert Rocha</span>
          <span>Aberto</span>
          <span>No prazo</span>
        </BodyData>
      </MenuTicket>
    </Container>
  );
};

export default TicketPanel;
