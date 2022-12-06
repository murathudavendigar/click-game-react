import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";
import TopScores from "../pages/TopScores";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/topscores" element={<TopScores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
