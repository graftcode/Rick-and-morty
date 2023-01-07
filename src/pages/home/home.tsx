import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";

import Layout from "../../components/layout/layout";
import CharacterCard from "../../components/characterCard/characterCard";

import { GET_CHARACTERS } from "../../graphql/Queries";
import { ICharacterData } from "../../interfaces/ICharacterData";
import Spinner from "../../components/spinner/spinner";
import Button from "../../components/button/button";
import { PageIndex, PaginationContainer } from "./home.styles";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, loading, refetch, previousData } = useQuery(
    GET_CHARACTERS,
    {
      variables: {
        page: pageIndex,
      },
    }
  );

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
      {/* RickAnDMOrtCharacters section pagination buttons at the top*/}

      <PaginationContainer>
        <Button handleClick={fetchPreviousPage} buttonText="Previous" />
        <PageIndex>{pageIndex}</PageIndex>
        <Button handleClick={fetchNextPage} buttonText="Next" />
      </PaginationContainer>

      <Spinner />
      {loading && <Spinner />}
      {error && <h2>There has been an error</h2>}
      {data &&
        [
          {
            id: "1233",
            name: "Test Enzyme",
            status: "pending",
            gender: "unknown",
            created: Date.now().toString(),
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          },
        ].map((character: ICharacterData) => (
          <CharacterCard key={character.id} {...character} />
        ))}
    </Layout>
  );
};

export default Home;
