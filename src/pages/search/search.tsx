import React, { useState } from "react";

import {
  SearchBarWrapper,
  SearchFieldButton,
  Container,
  StyledInput,
} from "./search.styles";

import FilterIcon from "../../assets/filter-icon.png";
import SearchIcon from "../../assets/search-icon.png";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (): void => {
    // make gql query here
  };

  return (
    <>
      <h1>Searh</h1>
      <Container>
        <SearchBarWrapper>
          <SearchFieldButton>
            <img src={SearchIcon} alt="" />
          </SearchFieldButton>
          <StyledInput
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for character"
          />
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
