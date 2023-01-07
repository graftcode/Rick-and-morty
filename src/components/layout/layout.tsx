import React from "react";

import styled from "styled-components";
import { rem } from "polished";

const Container = styled.section`
  max-width: ${rem(1400)};
  margin: auto;
  padding: ${rem(30)};
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
