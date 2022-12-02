import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clickCount, userSelectTime } = location?.state;
  const point = clickCount / userSelectTime;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>Your Score is :{point}</h1>
      <button onClick={() => navigate("/home")}>Try again</button>
    </div>
  );
};

export default Result;
