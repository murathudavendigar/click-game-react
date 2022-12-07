import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDataCall from "../hooks/useDataCall";

const TopScores = () => {
  const navigate = useNavigate();
  const { fetchData, dataList } = useDataCall();
  const [sortedData, setSortedData] = useState(dataList);

  useEffect(() => {
    handleSort();
  }, [dataList]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = () => {
    setSortedData(
      dataList?.map((item) => item)?.sort((a, b) => b?.userPoint - a?.userPoint)
    );
  };

  return (
    <div className=" text-white h-full text-center p-4">
      <h1
        className="text-start cursor-pointer hover:text-red-600 transition-all"
        onClick={() => navigate(-1)}>
        Go Back
      </h1>

      <div className="overflow-x-auto text-center my-4">
        <h1 className=" text-gray-700 uppercase bg-gray-200 text-center p-3 border-b border-black  w-full">
          Top Scores
        </h1>

        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-5">
                Rank
              </th>
              <th scope="col" className="py-3 px-5">
                Username
              </th>
              <th scope="col" className="py-3 px-5">
                Points
              </th>
            </tr>
          </thead>
          {sortedData?.map((item, index) => (
            <tbody key={index}>
              <tr className="bg-gray-50 border-b ">
                <th
                  scope="row"
                  className="py-4 px-5 font-medium text-gray-900 whitespace-nowrap border-r">
                  {index + 1}
                </th>
                <td className="py-4 px-5 border-r">{item?.userName}</td>
                <td className="py-4 px-5">{item?.userPoint}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TopScores;
