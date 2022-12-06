import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDataCall from "../hooks/useDataCall";

const Result = () => {
  const navigate = useNavigate();
  const { addData } = useDataCall();
  const location = useLocation();
  const { clickCount, userSelectTime } = location?.state;
  const point = clickCount / userSelectTime;

  addData(point);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>Your Score is :{point}</h1>
      <button onClick={() => navigate("/")}>Try again</button>
    </div>
  );
};

export default Result;
