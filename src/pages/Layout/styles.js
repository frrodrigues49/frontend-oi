import styled from "styled-components";

export const Container = styled.div``;

export const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid rgb(0, 171, 15);
  margin-bottom: 15px;
  padding-left: 10px;

  svg {
    height: 40px;
    width: auto;
  }

  span {
    font-family: SimplonHeadline, OiTextRegular, simplon_bpregular, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: normal;
    text-transform: uppercase;
    color: rgb(34, 34, 34);
    margin-left: 10px;
  }
`;
