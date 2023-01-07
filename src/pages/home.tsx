import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import CharacterCard from "../components/characterCard/characterCard";

import { getCharacters } from "../graphql/Queries";
import { ICharacterData } from "../interfaces/ICharacterData";

const Home = () => {
  const { data, error, loading } = useQuery(getCharacters);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <section>
      <h1>HOMEPAGE</h1>
      {/* RickAnDMOrtCharacters section */}
      {[
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
    </section>
  );
};

export default Home;
