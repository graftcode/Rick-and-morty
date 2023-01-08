import styled from "styled-components";
import { rem } from "polished";

export const LogoWrapper = styled.div`
  display: flex;
  gap: ${rem(10)};
  cursor: pointer;

  :hover {
    svg {
      fill: ${({ theme }) => theme.colors["battleship-grey"]};
    }
  }
`;

export const Header = styled.header`
  nav {
    display: flex;
    align-items: center;
    gap: ${rem(20)};
    margin-bottom: ${rem(20)};
    @media (min-width: ${rem(500)}) {
      gap: ${rem(50)};
    }
    a {
      font-size: ${rem(24)};
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.colors["dark-liver"]};
      padding: 5px;
    }

    a {
      :hover {
        color: ${({ theme }) => theme.colors["dark-liver"]};
        fill: ${({ theme }) => theme.colors["dark-liver"]};
      }
    }
  }
`;
