import { rem } from "polished";
import styled from "styled-components";

export const Card = styled.div`
  border: solid ${rem(2)} #000;
  border-radius: ${rem(5)};
  background: ${({ theme }) => theme.colors["battleship-grey"]};
  padding: ${rem(5)};
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.magnolia};

  ul {
    padding: ${rem(10)};
    text-align: left;
    align-self: flex-start;
  }
`;

export const Name = styled.h3`
  padding: 0 ${rem(10)};
  margin: ${rem(16)} auto;
  font-size: ${rem(20)};
  text-align: center;
  @media (min-width: ${rem(500)}) {
    font-size: ${rem(32)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StatusIcon = styled.span<{ status?: string }>`
  display: inline-block;
  height: ${rem(10)};
  width: ${rem(10)};
  margin: ${rem(2)} ${rem(7)} 0 0;
  padding: ${rem(1)};
  background: ${({ status }) => {
    if (status === "unknown") {
      return "lightgrey";
    }

    if (status === "Alive") {
      return "lightgreen";
    }

    if (status === "Dead") {
      return "red";
    }
  }};
  border-radius: 50%;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: ${rem(5)};
  font-weight: 500;
  display: flex;

  @media (min-width: ${rem(500)}) {
    display: block;
    font-size: ${rem(24)};
  }
`;
