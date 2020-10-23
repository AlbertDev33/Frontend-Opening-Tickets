import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #6ec4db;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    color: #f4f7f7;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
