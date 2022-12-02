import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
