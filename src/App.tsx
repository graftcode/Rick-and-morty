import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./pages/home";

import "./App.css";

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

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>hello world</h1>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
