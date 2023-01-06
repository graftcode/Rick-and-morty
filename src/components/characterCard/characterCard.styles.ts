import { rem } from "polished";
import styled from "styled-components";

export const Card = styled.div`
  border: solid ${rem(2)} 000;
  padding: ${rem(5)};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
