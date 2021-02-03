import React from 'react';

import Image from '../../assets/profile.png';

import { Container, ProfileImg, ProfileName } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>Albert Rocha</ProfileName>
    </Container>
  );
};

export default Profile;
