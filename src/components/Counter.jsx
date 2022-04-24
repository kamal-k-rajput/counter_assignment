import { useState } from "react";
import "./Counter.css";
export const Counter = ({ data }) => {
  const [counter, setcounter] = useState(data);
  function changeCounter(value) {
    setcounter(value + counter);
  }
  function doublecounter() {
    setcounter(2 * counter);
  }
  function color() {
    if (counter % 2 === 0) {
      return "green";
    }
    return "red";
  }
  return (
    <div>
      <div className="counter" style={{ fontSize: "50px" }}>
        Counter: <span style={{ color: color() }}>{counter}</span>{" "}
      </div>
      <button
        className="btn"
        style={{
          padding: "5px 20px",
          margin: "5px",
          fontSize: "40px",
          width: "80px",
        }}
        onClick={() => {
          changeCounter(1);
        }}
      >
        +
      </button>
      <button
        className="btn"
        style={{
          padding: "5px 20px",
          margin: "5px",
          fontSize: "40px",
          width: "80px",
        }}
        onClick={() => changeCounter(-1)}
      >
        -
      </button>
      <button
        onClick={() => doublecounter()}
        style={{
          padding: "5px",
          margin: "5px",
          fontSize: "40px",
          width: "150px",
        }}
      >
        Double
      </button>
    </div>
  );
};
