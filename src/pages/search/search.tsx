import React, { useState } from "react";

import {
  SearchBarWrapper,
  SearchFieldButton,
  FormContainer,
  StyledInput,
} from "./search.styles";
import CharactersList from "../../components/charactersList/charactersList";
import CharacterCard from "../../components/characterCard/characterCard";
import Layout from "../../components/layout/layout";

import FilterIcon from "../../assets/filterIcon.png";
import SearchIcon from "../../assets/searchIcon.png";

import Dropdowon from "../../components/dropdown/dropdown";
import Spinner from "../../components/spinner/spinner";

import { ICharacterData } from "../../interfaces/ICharacterData";
import { DROPDOWN_OPTIONS } from "../../consts/dropdownOptions";
import { useGetCharacters } from "../../hooks/useGetCharacters";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterObject, setFilterObject] = useState({});
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const [SearchCharacter, { data, error, loading }] = useGetCharacters();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (showFilterDropdown) setShowFilterDropdown(false);

    SearchCharacter({
      variables: {
        filter: {
          name: inputValue,
          ...filterObject,
        },
      },
    });
  };

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <Spinner />;

  return (
    <Layout>
      <h1>Searh</h1>
      <FormContainer onSubmit={handleSubmit}>
        <SearchBarWrapper>
          <SearchFieldButton type="submit">
            <img src={SearchIcon} alt="" />
          </SearchFieldButton>
          <StyledInput
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for character"
          />
          <SearchFieldButton marginLeft type="button">
            <img
              src={FilterIcon}
              alt=""
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            />
          </SearchFieldButton>
          {showFilterDropdown && (
            <Dropdowon
              handleOption={setFilterObject}
              dropdownOptions={DROPDOWN_OPTIONS}
            />
          )}
        </SearchBarWrapper>
      </FormContainer>

      <CharactersList>
        {data &&
          data.characters.results.map((character: ICharacterData) => (
            <CharacterCard key={character.id} {...character} />
          ))}
      </CharactersList>
    </Layout>
  );
};

export default Search;
