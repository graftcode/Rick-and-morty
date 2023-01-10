import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CharacterCard from "../../components/characterCard/characterCard";

import { ICharacterData } from "../../interfaces/ICharacterData";
import Spinner from "../../components/spinner/spinner";
import Button from "../../components/button/button";
import { PageIndex, PaginationContainer, Title } from "./home.styles";
import CharactersList from "../../components/charactersList/charactersList";
import { useGetCharacters } from "../../hooks/useGetCharacters";

const Home = () => {
  const [searchParams, setSearchParams]: any = useSearchParams();
  const { page: searchPageParam } = Object.fromEntries([...searchParams]);

  const isValidSearchPageParam = !isNaN(searchPageParam) && searchPageParam > 0;

  const initialPageIndex = isValidSearchPageParam ? Number(searchPageParam) : 1;
  const [pageIndex, setPageIndex] = useState<number>(initialPageIndex);

  const [getCharacters, { data, error, loading, called }] = useGetCharacters();

  useEffect(() => {
    getCharacters({
      variables: {
        page: pageIndex,
      },
    }).then(({ data }) => {
      const { characters } = data;
      setSearchParams(`page=${characters.info.next - 1}`);
    });
  }, [pageIndex, searchPageParam]);

  const fetchNextPage = (): void => {
    setPageIndex(pageIndex + 1);
  };

  const fetchPreviousPage = (): void => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <>
      <Title>Rick And Morty Archive</Title>
      {data && (
        <PaginationContainer>
          <Button
            disableButton={data?.characters?.info.prev}
            handleClick={fetchPreviousPage}
            buttonText="Previous"
          />
          <PageIndex>{pageIndex}</PageIndex>
          <Button
            disableButton={data?.characters?.info.next}
            handleClick={fetchNextPage}
            buttonText="Next"
          />
        </PaginationContainer>
      )}
      {loading && <Spinner />}
      {error && <h2>There has been an error</h2>}
      <CharactersList>
        {data &&
          data.characters.results.map((character: ICharacterData) => (
            <CharacterCard key={character.id} {...character} />
          ))}
      </CharactersList>
    </>
  );
};

export default Home;
