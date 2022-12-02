import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clickCount = location?.state;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>Your Score is {clickCount}</h1>
      <button onClick={() => navigate("/")}>Try again</button>
    </div>
  );
};

export default Result;
