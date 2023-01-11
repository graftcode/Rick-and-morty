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
import PaginationContainer from "../../components/paginationContainer/paginationContainer";

import FilterIcon from "../../assets/filterIcon.png";
import SearchIcon from "../../assets/searchIcon.png";

import Dropdowon from "../../components/dropdown/dropdown";
import Spinner from "../../components/spinner/spinner";

import { ICharacterData } from "../../interfaces/ICharacterData";
import { DROPDOWN_OPTIONS } from "../../consts/dropdownOptions";
import { useGetCharacters } from "../../hooks/useGetCharacters";

import { ISetSearchParamData } from "../../interfaces/ISetSearchParamData";

const Search = () => {
  const [searchParams, setSearchParams]: any = useSearchParams();
  const { name: nameParam, gender: genderParam } = Object.fromEntries([
    ...searchParams,
  ]);

  const [inputValue, setInputValue] = useState<string>("");
  const [genderValue, setGenderValue] = useState<string>("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [pageIndex, setPageIndex] = useState<number>(1);

  const [SearchCharacter, { data, error, loading, called }] =
    useGetCharacters();

  //if accepted params available make call after initial render
  useEffect(() => {
    if (!called && (genderParam || nameParam)) {
      const dataToQuery: ISetSearchParamData = {};
      if (nameParam) dataToQuery.name = nameParam;
      if (genderParam) dataToQuery.gender = genderParam;

      SearchCharacter({
        variables: {
          filter: { ...dataToQuery },
          // not accepting page param on initial gql request.
          // just accepting name gender
          page: 1,
        },
      }).then((res) => {
        setSearchParams({ ...dataToQuery, page: 1 });
      });
    }
  }, [setSearchParams, SearchCharacter, called, genderParam, nameParam]);

  const handleSubmit = (
    e: React.SyntheticEvent,
    newPageIndex?: number
  ): void => {
    e.preventDefault();
    const dataToQuery: ISetSearchParamData | any = {};

    // new page index suggest prev/next button used. therefore take data from param
    //deciding whether pass param info or state info to gql query
    if (newPageIndex) {
      // what to include in query
      if (!!genderParam) dataToQuery.gender = genderParam;
      if (!!genderValue) dataToQuery.gender = genderValue;
      if (!!nameParam) dataToQuery.name = nameParam;
    } else {
      // else grabbing state data only
      if (!!inputValue) {
        dataToQuery.name = inputValue;
      }
      if (!!genderValue) {
        dataToQuery.gender = genderValue;
      }
    }

    SearchCharacter({
      variables: {
        filter: {
          ...dataToQuery,
        },
        page: newPageIndex || 1,
      },
    }).then(() => {
      setSearchParams({
        ...dataToQuery,
        page: newPageIndex || 1,
      });
      if (!newPageIndex) setPageIndex(1);
    });

    setShowFilterDropdown(false);
    setInputValue("");
    setGenderValue("");
  };

  const fetchNextPage = (e: React.SyntheticEvent): void => {
    setPageIndex(pageIndex + 1);
    return handleSubmit(e, pageIndex + 1);
  };

  const fetchPreviousPage = (e: any): void => {
    setPageIndex(pageIndex - 1);
    return handleSubmit(e, pageIndex - 1);
  };

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <Spinner />;

  const showPagination = data?.characters?.info?.count > 20;

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
              handleOption={setGenderValue}
              dropdownOptions={DROPDOWN_OPTIONS}
            />
          )}
        </SearchBarWrapper>

        {data && showPagination && (
          <PaginationContainer
            nextButton={{
              disableButton: !!data?.characters?.info.next,
              handleClick: fetchNextPage,
              buttonText: "Next",
              type: "button",
            }}
            previousButton={{
              disableButton: !!data?.characters?.info.prev,
              handleClick: fetchPreviousPage,
              buttonText: "Previous",
              type: "button",
            }}
            pageIndex={pageIndex}
          />
        )}

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
