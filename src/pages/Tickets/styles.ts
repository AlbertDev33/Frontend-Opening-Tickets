import styled from 'styled-components';

import ticketBackground from '../../assets/ticket-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 90%;

  h1 {
    color: #ecf0f1;
  }

  form {
    margin: 80px 0;
    width: 450px;

    text-align: center;

    button {
      width: 340px;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f4f4f4;
    font-weight: 600;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  background: url(${ticketBackground}) no-repeat center;
  background-size: cover;
`;
