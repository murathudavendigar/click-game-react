import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterUserName } from "../features/userNameSlice";

const Username = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(enterUserName(userName));
    navigate("/home");
  };

  return (
    <div className="bg-[#513252] text-white h-screen w-screen flex justify-center items-center gap-4">
      <div className="mb-6 text-center">
        <label
          htmlFor="success"
          className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
          Your name
        </label>
        <input
          type="text"
          id="success"
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Success input"
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">Well done!</span> Some success messsage.
        </p>
        <button
          type="button"
          disabled={!userName}
          onClick={handleSubmit}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 disabled:bg-purple-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Purple
        </button>
      </div>
    </div>
  );
};

export default Username;
