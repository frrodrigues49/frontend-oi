import styled, { keyframes } from "styled-components";

export const ButtonNew = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
export const ButtonDelete = styled.span`
  cursor: pointer;
`;

const Heading = keyframes`
  0% { top: -3.125em; }
  100% { top: 1em;}
`;

export const ContainerDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${Heading};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
`;
