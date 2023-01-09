import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";

const theme = {
  // used coolors.co random color generator
  colors: {
    magnolia: "#fcf7ffff",
    "silver-sand": "#c4cad0ff",
    "battleship-grey": "#878c8fff",
    "heliotrope-gray": "#a4969bff",
    "dark-liver": "#655560ff",
  },
};

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
