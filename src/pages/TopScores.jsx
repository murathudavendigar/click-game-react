import React, { useState } from "react";
import { useEffect } from "react";
import useDataCall from "../hooks/useDataCall";

const TopScores = () => {
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
    <div className="bg-[#513252] text-white h-full text-center p-4">
      <h1 className="text-center">Top Scores</h1>
      <div className="overflow-x-auto text-center my-4">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Rank
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                Points
              </th>
            </tr>
          </thead>
          {sortedData?.map((item, index) => (
            <tbody key={index}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{item?.userName}</td>
                <td className="py-4 px-6">{item?.userPoint}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TopScores;
