import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import ProfileImage from '../../assets/profile.png';

import { Container, ProfileImg, MessageIcon } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <MessageIcon>
        <FaEnvelope size={16} />
      </MessageIcon>
      <ProfileImg src={ProfileImage} />
    </Container>
  );
};

export default Nav;
