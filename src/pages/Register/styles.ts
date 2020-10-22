import styled from 'styled-components';
import { shade } from 'polished';

import registerBackgroundImg from '../../assets/register-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    color: #312e38;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.1, '#312e38')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${registerBackgroundImg}) no-repeat center;
  background-size: cover;
`;
