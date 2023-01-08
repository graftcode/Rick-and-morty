import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Search from "./pages/search/search";

import Navigation from "./components/navigation/navigation";
import Layout from "./components/layout/layout";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Navigation />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Search />} path="/search" />
      </Routes>
    </Layout>
  );
};

export default App;
