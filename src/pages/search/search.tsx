import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  SearchBarWrapper,
  SearchFieldButton,
  FormContainer,
  StyledInput,
} from "./search.styles";
import CharactersList from "../../components/charactersList/charactersList";
import CharacterCard from "../../components/characterCard/characterCard";

import FilterIcon from "../../assets/filterIcon.png";
import SearchIcon from "../../assets/searchIcon.png";

import Dropdowon from "../../components/dropdown/dropdown";
import Spinner from "../../components/spinner/spinner";

import { ICharacterData } from "../../interfaces/ICharacterData";
import { DROPDOWN_OPTIONS } from "../../consts/dropdownOptions";
import { useGetCharacters } from "../../hooks/useGetCharacters";
import { queryParser } from "../../components/helper/queryParser";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filterObject, setFilterObject] = useState<{ gender?: string }>({});
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [_, setSearchParams] = useSearchParams();

  const [SearchCharacter, { data, error, loading, called }] =
    useGetCharacters();

  //if accepted params available make call after initial render
  useEffect(() => {
    const params = queryParser(window.location.href);

    if (!called && (params.name || params.gender)) {
      setInputValue(params.name);
      setFilterObject({
        gender: params.gender,
      });

      const dataToQuery: any = {};
      if (params.name) dataToQuery.name = params.name;
      if (params.gender) dataToQuery.gender = params.gender;

      SearchCharacter({
        variables: {
          filter: dataToQuery,
        },
      });
    }
  }, []);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (inputValue.length === 0 && filterObject.gender === undefined) {
      console.log("not making call");
      return;
    }

    SearchCharacter({
      variables: {
        filter: {
          name: inputValue,
          ...filterObject,
        },
      },
    });

    const paramData: any = { ...filterObject, name: inputValue };
    const queryParamString = Object.keys(paramData)
      .map((key) => paramData[key] && key + "=" + paramData[key])
      .join("&")
      .replace(/.$/, "");

    setSearchParams(queryParamString);
    if (showFilterDropdown) setShowFilterDropdown(false);
    setInputValue("");
    setFilterObject({});
  };

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <Spinner />;

  return (
    <>
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
        {data && data.characters.results.length === 0 && (
          <h1>No Characters found!</h1>
        )}
      </FormContainer>

      <CharactersList>
        {data &&
          data.characters.results.length > 0 &&
          data.characters.results.map((character: ICharacterData) => (
            <CharacterCard key={character.id} {...character} />
          ))}
      </CharactersList>
    </>
  );
};

export default Search;
