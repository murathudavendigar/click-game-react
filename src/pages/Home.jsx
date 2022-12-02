import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [starter, setStarter] = useState(false);
  const [userSelectTime, setUserSelectTime] = useState(5);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (starter) {
      setSeconds(userSelectTime);
      console.log("starter içi : " + starter);
    }
  }, [starter]);

  return (
    <>
      <div className="main">
        <div>
          <select onChange={(e) => setUserSelectTime(e.target.value)}>
            <option value={5}>5 seconds</option>
            <option value={10}>10 seconds</option>
            <option value={20}>20 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={40}>40 seconds</option>
            <option value={50}>50 seconds</option>
            <option value={60}>60 seconds</option>
          </select>
        </div>

        <h3>{clickCount}</h3>
        <h1>{seconds}</h1>
        <button onClick={() => setStarter(true)}>Start Game</button>
        <button
          className="circle-div"
          onClick={() => setClickCount(clickCount + 1)}
          disabled={!starter}>
          Click
        </button>
      </div>
    </>
  );
};

export default Home;
