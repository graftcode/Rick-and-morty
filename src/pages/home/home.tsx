import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import Layout from "../../components/layout/layout";
import CharacterCard from "../../components/characterCard/characterCard";

import { GET_CHARACTERS } from "../../graphql/Queries";
import { ICharacterData } from "../../interfaces/ICharacterData";
import Spinner from "../../components/spinner/spinner";
import Button from "../../components/button/button";
import { PageIndex, PaginationContainer } from "./home.styles";
import CharactersList from "../../components/charactersList/charactersList";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, loading, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      page: pageIndex,
    },
  });

  const fetchNextPage = () => {
    // don't query if we already on the last page

    if (pageIndex === data?.characters?.info.pages) {
      console.log("this is last page");
      alert("no more pages");
      return;
    }

    setPageIndex(pageIndex + 1);
    refetch({ page: pageIndex + 1 });
  };

  const fetchPreviousPage = () => {
    console.log("data:", data);

    if (!data?.characters?.info.prev && !loading) {
      alert("no more previous page");
      return;
    }

    setPageIndex(pageIndex - 1);
    refetch({ page: pageIndex - 1 });
  };

  return (
    <Layout>
      <h1>HOMEPAGE</h1>
      <PaginationContainer>
        <Button handleClick={fetchPreviousPage} buttonText="Previous" />
        <PageIndex>{pageIndex}</PageIndex>
        <Button handleClick={fetchNextPage} buttonText="Next" />
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
