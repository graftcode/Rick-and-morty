import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  gap: ${rem(16)};

  @media (min-width: ${rem(700)}) {
    grid-template-columns: 1fr 1fr;
  }



  @media (min-width: ${rem(1100)}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CharactersList = ({ children }: any) => <Container>{children}</Container>;

export default CharactersList;
