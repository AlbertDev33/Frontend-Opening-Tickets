import React from 'react';

import Profile from '../Profile';
import Menu from '../Menu';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Profile />
      <Menu />
    </Container>
  );
};

export default Sidebar;
