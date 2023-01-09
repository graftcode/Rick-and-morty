import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { rem } from "polished";
import Navigation from "../navigation/navigation";

const Container = styled.section`
  max-width: ${rem(1400)};
  margin: auto;
  padding: ${rem(32)} ${rem(16)};
`;

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
