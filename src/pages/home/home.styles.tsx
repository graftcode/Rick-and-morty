import styled from "styled-components";
import { rem } from "polished";

export const PageIndex = styled.span`
  color: ${({ theme }) => theme.colors["battleship-grey"]};
  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: ${rem(32)};
  font-weight: 700;
  padding: ${rem(5)};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: ${rem(800)};
  margin: 0 auto ${rem(50)};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors["battleship-grey"]};
  @media (min-width: ${rem(500)}) {
    font-size: ${rem(32)};
  }
`;
