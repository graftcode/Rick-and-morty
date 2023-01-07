import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Routes>
        <Route element={<Home />} index />
      </Routes>
    </div>
  );
};

export default App;
