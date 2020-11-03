import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;

  h1 {
    margin-top: 60px;
    color: #312e38;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 90%;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 600px;
    margin-top: 100px;

    div {
      width: 500px;
      input {
      }
    }

    textarea {
      width: 500px;
    }

    button {
      width: 340px;
    }
  }

  a {
    margin-top: 80px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #312e38;
    font-weight: 600;

    svg {
      margin-right: 10px;
    }
  }
`;
