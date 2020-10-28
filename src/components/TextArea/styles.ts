import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  textarea {
    height: 170px;
    width: 100%;
    background: #ecf0f1;
    border-radius: 10px;
    padding: 16px;
    margin-top: 10px;
    resize: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;

    border: 3px solid #ecf0f1;
    color: #666360;

    display: flex;
    align-items: center;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${props =>
      props.isFocused &&
      css`
        color: #666360;
        border-color: #6ec4db;
      `}
  }

  div {
    position: relative;
    svg {
      position: absolute;
      right: 30px;
      top: 20px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
  }
`;
