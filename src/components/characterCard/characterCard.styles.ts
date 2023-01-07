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
  text-align: center;
  padding: ${rem(10)};
  color: ${({ theme }) => theme.colors.magnolia};

  ul {
    padding: 0;
  }

  * {
    font-size: ${rem(16)};
  }
`;

export const Name = styled.h3`
  padding: 0 ${rem(10)};
  margin: 0 auto ${rem(16)};

  @media (min-width: ${rem(500)}) {
    font-size: ${rem(24)};
    margin: 0;
  }
`;

export const Image = styled.img`
  max-width: ${rem(100)};
  height: ${rem(130)};
  @media (min-width: ${rem(500)}) {
    margin: auto;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: ${rem(5)};
  font-weight: 500;
  display: flex;

  br {
    display: none;
  }

  @media (min-width: ${rem(500)}) {
    display: block;
    font-size: ${rem(24)};
    br {
      display: block;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${rem(500)}) {
    flex-direction: column;
  }
`;
