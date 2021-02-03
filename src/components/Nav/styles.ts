import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ProfileImg = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 0 1rem;
  cursor: pointer;

  svg {
    color: red;
  }
`;

export const MessageIcon = styled.span`
  svg {
    cursor: pointer;
  }
`;
