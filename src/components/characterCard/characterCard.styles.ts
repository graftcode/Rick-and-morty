import { rem } from "polished";
import styled from "styled-components";

export const Card = styled.div`
  border: solid ${rem(2)} #000;
  border-radius: ${rem(5)};
  background: ${({ theme }) => theme.colors["battleship-grey"]};
  max-width: ${rem(300)};
  padding: ${rem(5)};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: ${rem(32)};
  color: ${({ theme }) => theme.colors.magnolia};

  ul {
    padding: 0;
  }
`;

export const Name = styled.h3`
  padding: 0 ${rem(10)};
  margin: 0;
  font-size: ${rem(32)};
`;

export const Image = styled.img`
  max-width: ${rem(500)};
`;

export const ListItem = styled.li`
  list-style: none;

  padding: ${rem(5)};
  font-size: ${rem(24)};
  font-weight: 500;
`;
