import React from "react";
import { useEffect } from "react";
import useDataCall from "../hooks/useDataCall";

const TopScores = () => {
  const { fetchData, dataList } = useDataCall();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container bg-[#513252] text-white h-full flex justify-center ">
      <h1>Top Scores</h1>
      {dataList?.map((item) => (
        <h1>{item.userPoint}</h1>
      ))}
    </div>
  );
};

export default TopScores;
