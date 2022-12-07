import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [starter, setStarter] = useState(false);
  const [userSelectTime, setUserSelectTime] = useState(1);
  const [loadingTime, setLoadingTime] = useState(0);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.userName);

  // const initialValues = {
  //   userName: ,
  //   userSetTime: infoData.userSetTime,
  //   userClickCount: infoData.userClickCount,
  //   userPoint: infoData.userPoint,
  // };

  useEffect(() => {
    if (starter) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          console.log("interval içi. saniye : " + seconds);
        } else {
          console.log("time is up");
          setStarter(false);
          clearInterval(interval);
          setTimeout(() => {
            navigate("/result", { state: { clickCount, userSelectTime } });
          }, 3000);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);
  console.log("interval dışı. saniye : " + seconds);
  useEffect(() => {
    if (starter) {
      setLoadingTime(3);
      setTimeout(() => {
        setSeconds(userSelectTime);
        console.log("starter içi : " + starter);
      }, 3000);
    }
  }, [starter]);

  return (
    <>
      <div className="bg-[#513252] text-white h-screen w-screen flex justify-center items-center gap-4">
        <div>
          <select
            onChange={(e) => setUserSelectTime(e.target.value)}
            className="bg-[#FFC18E]  hover:bg-[#FFC176] text-[#7A4069] focus:[#CA4E79] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  cursor-pointer">
            <option value={1}>1 seconds</option>
            <option value={5}>5 seconds</option>
            <option value={10}>10 seconds</option>
            <option value={15}>15 seconds</option>
            <option value={20}>20 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={50}>50 seconds</option>
            <option value={60}>60 seconds</option>
            <option value={100}>100 seconds</option>
          </select>
        </div>
        <button
          className="w-40 h-40 border-2 rounded-[50%] border-[#CA4E79] cursor-pointer active::border-white"
          onClick={() => setClickCount(clickCount + 1)}
          disabled={!starter}>
          Click
        </button>
        <div className="text-center font-bold text-lg border border-dashed p-3 rounded-2xl">
          <p className="">Clicks</p>
          <h3>{clickCount}</h3>
        </div>
        <div className="text-center font-bold text-lg border border-dashed p-3 rounded-2xl">
          <p>Timer</p>
          <h1>{seconds}</h1>
        </div>

        <div className="block">
          <div onClick={() => navigate("/topscores")}>Go Top Scores</div>
          <button onClick={() => setStarter(true)}>Start Game</button>
        </div>
      </div>
    </>
  );
};

export default Home;
