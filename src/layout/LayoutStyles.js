import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Main = styled.main`
  margin-top: 50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
  }
`;
