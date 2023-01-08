import { rem } from "polished";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
  disableButton: boolean;
}

const ButtonContainer = styled.button<{ disabled: boolean }>`
  font-size: ${rem(16)};

  @media (min-width: ${rem(500)}) {
    font-size: ${rem(24)};
  }

  background: ${({ theme }) => theme.colors["battleship-grey"]};
  border: solid transparent ${rem(5)};
  border-radius: ${rem(8)};
  color: ${({ theme }) => theme.colors.magnolia};
  cursor: pointer;

  font-weight: 700;
  padding: ${rem(10)} ${rem(5)};
  max-width: ${rem(200)};
  width: ${rem(150)};
  &:hover {
    border: solid #5d5f60 ${rem(5)};
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: dimgrey;
    color: linen;
    opacity: .5;`}
`;

const Button: React.FC<ButtonProps> = ({
  buttonText,
  handleClick,
  disableButton,
}) => (
  <ButtonContainer disabled={!disableButton} onClick={handleClick}>
    {buttonText}
  </ButtonContainer>
);

export default Button;
