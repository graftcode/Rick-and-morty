import React, { useEffect, useState } from "react";

import Layout from "../../components/layout/layout";
import CharacterCard from "../../components/characterCard/characterCard";

import { ICharacterData } from "../../interfaces/ICharacterData";
import Spinner from "../../components/spinner/spinner";
import Button from "../../components/button/button";
import { PageIndex, PaginationContainer } from "./home.styles";
import CharactersList from "../../components/charactersList/charactersList";
import { useGetCharacters } from "../../hooks/useGetCharacters";

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const [getCharacters, { data, error, loading }] = useGetCharacters();

  useEffect(() => {
    getCharacters({
      variables: {
        page: pageIndex,
      },
    });
  }, [getCharacters, pageIndex]);

  const fetchNextPage = (): void => {
    setPageIndex(pageIndex + 1);
  };

  const fetchPreviousPage = (): void => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <Layout>
      <h1>HOMEPAGE</h1>
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
      {loading && <Spinner />}
      {error && <h2>There has been an error</h2>}
      <CharactersList>
        {data &&
          data.characters.results.map((character: ICharacterData) => (
            <CharacterCard key={character.id} {...character} />
          ))}
      </CharactersList>
    </Layout>
  );
};

export default Home;
