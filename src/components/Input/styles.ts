import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ecf0f1;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #ecf0f1;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #6ec4db;
      border-color: #6ec4db;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #6ec4db;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
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
