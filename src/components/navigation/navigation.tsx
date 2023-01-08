import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RickAndMortyLogo } from "../../assets/rickAndMorty.svg";
import { Header, LogoWrapper } from "./navigation.styles";

const Navigation = () => {
  return (
    <Header>
      <nav>
        <LogoWrapper>
          <Link to="/">
            <RickAndMortyLogo />
          </Link>
        </LogoWrapper>
        <Link to="/search">Search</Link>
      </nav>
    </Header>
  );
};

export default Navigation;
