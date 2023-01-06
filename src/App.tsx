import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { getCharacters } from "./graphql/Queries";

import "./App.css";

const App = (): JSX.Element => {
  const { data, error, loading } = useQuery(getCharacters);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
};

export default App;
