import { title } from 'process';
import React, { HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Title } from './styles';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<IconBaseProps>;
  active?: boolean;
  title: string;
}

const MenuItens: React.FC<MenuProps> = ({
  icon: Icon,
  active,
  title: text,
}) => {
  return (
    <Container active={active}>
      {Icon && <Icon size={20} />}
      <Title active={active}>{text}</Title>
    </Container>
  );
};

export default MenuItens;
