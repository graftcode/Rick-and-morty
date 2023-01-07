import { rem } from "polished";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
}

const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors["battleship-grey"]};
  border: solid transparent ${rem(5)};
  border-radius: ${rem(8)};
  color: ${({ theme }) => theme.colors.magnolia};
  cursor: pointer;
  font-size: ${rem(32)};
  font-weight: 700;
  padding: ${rem(20)} ${rem(10)};
  max-width: ${rem(200)};
  width: ${rem(200)};
  &:hover {
    border: solid #5d5f60 ${rem(5)};
  }
`;

const Button: React.FC<ButtonProps> = ({ buttonText, handleClick }) => (
  <ButtonContainer onClick={handleClick}>{buttonText}</ButtonContainer>
);

export default Button;
