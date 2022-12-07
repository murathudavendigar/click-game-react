import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Result from "../pages/Result";
import TopScores from "../pages/TopScores";
import Username from "../pages/Username";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Username />} />
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/topscores" element={<TopScores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
