import React from "react";

import {
  SearchBarWrapper,
  SearchFieldButton,
  Container,
  StyledInput,
} from "./search.styles";

import FilterIcon from "../../assets/filter-icon.png";
import SearchIcon from "../../assets/search-icon.png";

const Search = () => {
  return (
    <>
      <h1>Searh</h1>
      <Container>
        <SearchBarWrapper>
          <SearchFieldButton>
            <img src={SearchIcon} alt="" />
          </SearchFieldButton>
          <StyledInput placeholder="Search for character" />
        </SearchBarWrapper>
        <SearchBarWrapper>
          <SearchFieldButton>
            <img src={FilterIcon} alt="" />
          </SearchFieldButton>
        </SearchBarWrapper>
      </Container>
    </>
  );
};

export default Search;
