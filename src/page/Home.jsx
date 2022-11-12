import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const timer = () => {
    if (limit > 0) {
      setInterval(() => {
        setLimit(limit - 1);
      }, 1000);
    } else {
      console.log("Hi");
    }
  };

  return (
    <div className="main">
      <h3>{clickCount}</h3>
      <h1>{limit}</h1>
      <div
        className="circle-div"
        onClick={() => setClickCount(clickCount + 1)}></div>
      <button onClick={timer}>Click</button>
    </div>
  );
};

export default Home;
