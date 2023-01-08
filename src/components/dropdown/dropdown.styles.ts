import styled from "styled-components";
import { rem } from "polished";

export const DropdownWrapper = styled.div`
  position: absolute;
  padding: ${rem(10)};
  right: 0;
  top: 110%;
  border: ${rem(2)} solid ${({ theme }) => theme.colors["battleship-grey"]};
  background: ${({ theme }) => theme.colors["battleship-grey"]};
  color: white;
  label {
    display: block;
    text-align: left;

    font-weight: 700;
  }

  input {
    margin: ${rem(5)};
    
  }
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
