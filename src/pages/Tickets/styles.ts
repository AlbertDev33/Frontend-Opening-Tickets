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

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    textarea {
      height: 160px;
      background: #ecf0f1;
      border-radius: 10px;
      padding: 16px;
      width: 100%;
      margin-top: 10px;
      resize: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 16px;

      border: 2px solid #ecf0f1;
      color: #666360;

      display: flex;
      align-items: center;
    }
  }

  a {
    text-decoration: none;
    color: #312e38;
    font-weight: 600;
    padding: 10px;
    background-color: #6ec4db;
    border-radius: 10px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  background: url(${ticketBackground}) no-repeat center;
  background-size: cover;
`;
