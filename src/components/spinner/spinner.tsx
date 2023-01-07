import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  height: ${rem(100)};
  width: ${rem(100)};
  margin: auto;
  &::before {
    content: " ";
    display: block;
    height: ${rem(70)};
    width: ${rem(70)};
    margin: ${rem(10)};
    border-radius: 50%;
    border: ${rem(6)} solid ${({ theme }) => theme.colors["battleship-grey"]};
    border-color: ${({ theme }) => theme.colors["battleship-grey"]} transparent;
    animation: spin 1.2s linear infinite;
   

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Spinner = () => <SpinnerContainer />;

export default Spinner;
