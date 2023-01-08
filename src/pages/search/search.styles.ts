import styled from "styled-components";
import { rem } from "polished";

export const SearchFieldButton = styled.button<{ marginLeft?: boolean }>`
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

  margin-left: ${({ marginLeft }) => (marginLeft ? `${rem(30)}` : "0")};
`;

export const SearchBarWrapper = styled.div`
  border-bottom: ${rem(2)} solid
    ${({ theme }) => theme.colors["battleship-grey"]};
  display: flex;
  padding: ${rem(10)} 0;

`;

export const FormContainer = styled.form`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${rem(30)};
  margin-bottom: ${rem(50)};
  position: relative;
`;

export const StyledInput = styled.input`
  border: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.colors["battleship-grey"]};
  font-size: ${rem(18)};
  margin-left: ${rem(10)};
  outline: none;
`;
