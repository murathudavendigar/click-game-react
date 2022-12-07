import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useDataCall from "../hooks/useDataCall";

const Result = () => {
  const { currentUser } = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const { addData } = useDataCall();
  const location = useLocation();
  const { clickCount, userSelectTime } = location?.state;
  const point = clickCount / userSelectTime;
  const info = {
    userName: currentUser?.payload || "guest",
    userSetTime: userSelectTime,
    userClickCount: clickCount,
    userPoint: point,
  };

  useEffect(() => {
    addData(info);
  }, []);

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
