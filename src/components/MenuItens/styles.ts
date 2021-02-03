import styled from 'styled-components';

interface MenuItensProps {
  active?: boolean;
}

export const Container = styled.div<MenuItensProps>`
  border-left: 3px solid ${props => (props.active ? '#585280' : 'transparent')};

  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    color: ${props => (!props.active ? '#aaa5a5' : '#585280')};
    margin-right: 1rem;
  }
`;

export const Title = styled.h1<MenuItensProps>`
  color: ${props => (!props.active ? '#aaa5a5' : '#585280')};
  font-size: 0.9rem;
  font-weight: 300;
`;
