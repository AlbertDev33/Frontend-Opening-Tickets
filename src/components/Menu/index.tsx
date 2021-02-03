import React from 'react';
import { FaHome, FaFile, FaGift, FaCog } from 'react-icons/fa';

import { Container } from './styles';
import MenuItem from '../MenuItens';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem title="Home" icon={FaHome} />
      <MenuItem title="Deposits" icon={FaFile} />
      <MenuItem active icon={FaGift} title="Presente" />
      <MenuItem icon={FaCog} title="Configurações" />
    </Container>
  );
};

export default Menu;
