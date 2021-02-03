import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Container } from './styles';

const PlusButton: React.FC = () => {
  return (
    <Container>
      <FiPlusCircle size={36} />
    </Container>
  );
};

export default PlusButton;
