import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 16%;
  background-color: #fff;
  position: absolute;
  left: 0;

  button {
    border: 0;
    position: absolute;
    background: transparent;
    bottom: 30px;

    svg {
      color: #312e38;
      transition: color 0.2s;

      &:hover {
        color: #6ec4db;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin: 0;

  h1 {
    font-size: 18px;
    color: #312e38;
    font-weight: 600;
    color: #f1f1f1;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30%;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  right: 25px;

  width: 600px;
  height: 600px;
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60%;
  justify-content: center;
`;

export const TicketInformations = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;
