import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [starter, setStarter] = useState(false);
  const [clickStarter, setClickStarter] = useState(false);
  const [userSelectTime, setUserSelectTime] = useState(1);
  const [loadingTime, setLoadingTime] = useState(3);
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
        if (seconds === 1) {
          setSeconds(seconds - 1);
        } else if (seconds > 1) {
          setSeconds(seconds - 1);
          console.log("interval içi. saniye : " + seconds);
        } else {
          console.log("time is up");
          setStarter(false);
          setClickStarter(false);
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
      const interval = setInterval(() => {
        if (loadingTime > 0) {
          setLoadingTime(loadingTime - 1);
        } else {
          clearInterval(interval);
          setSeconds(userSelectTime);
          setClickStarter(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [starter, loadingTime]);

  return (
    <>
      <div className="text-white h-screen w-screen flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
          <div>
            <select
              onChange={(e) => setUserSelectTime(e.target.value)}
              className=" border-2 border-[#FFC18E] bg-transparent  text-[#FFC18E] focus:[#CA4E79] focus:outline-none focus:bg-[#513252] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  cursor-pointer">
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
          <div className="border-2 rounded-[50%] border-[#CA4E79]">
            <button
              className="w-40 h-40 lg:w-60 lg:h-60 border-2 rounded-[50%] border-[#CA4E79] cursor-pointer active::border-white m-2"
              onClick={() => setClickCount(clickCount + 1)}
              disabled={!clickStarter}>
              {!clickStarter && starter ? loadingTime : "Click"}
            </button>
          </div>
          {starter ? (
            <div className="inline-block px-6 py-2 border-2 border-[#FFC18E] text-[#FFC18E] font-medium text-md leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              <h1>Ready !!!</h1>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setStarter(true)}
                className="inline-block px-6 py-2 border-2 border-[#FFC18E] text-[#FFC18E] font-medium text-md leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Start Game
              </button>
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <div className="text-center font-bold text-lg border border-dashed p-3 rounded-2xl">
            <p className="">Clicks</p>
            <h3>{clickCount}</h3>
          </div>
          <div className="text-center font-bold text-lg border border-dashed p-3 rounded-2xl">
            <p>Timer</p>
            <h1>{seconds}</h1>
          </div>
        </div>
        <div className="block">
          <div onClick={() => navigate("/topscores")}>Go Top Scores</div>
        </div>
      </div>
    </>
  );
};

export default Home;
