import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Search from "./pages/search/search";

import "./App.css";
import Navigation from "./components/navigation/navigation";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navigation />
      <h1>Rick and Morty</h1>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Search />} path="/search" />
      </Routes>
    </div>
  );
};

export default App;
