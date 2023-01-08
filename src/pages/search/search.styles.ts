import styled from "styled-components";
import { rem } from "polished";

export const SearchFieldButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: ${rem(50)};
  img {
    width: 100%;
    background: transparent;
    border-radius: ${rem(5)};
  }
`;

export const SearchBarWrapper = styled.div`
  border-bottom: ${rem(2)} solid
    ${({ theme }) => theme.colors["battleship-grey"]};
  color: #c4ca18;
  display: flex;
  padding: ${rem(10)} 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(30)};
`;

export const StyledInput = styled.input`
  border: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.colors["battleship-grey"]};
  font-size: ${rem(18)};
  margin-left: ${rem(10)};
  outline: none;
`;
