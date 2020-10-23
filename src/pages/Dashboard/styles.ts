import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;

  h1 {
    font-size: 16px;
    height: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-width: 1200px;

  form {
    width: 60%;
    margin: 80px 0;
    display: flex;
    align-items: center;

    input {
      flex: 1;
    }

    button {
      width: 100px;
      height: 50px;
      margin-top: 0;
      margin-left: 20px;
    }
  }
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60%;
  justify-content: center;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border: 1px solid #6ec4db;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
    }
  }
`;
