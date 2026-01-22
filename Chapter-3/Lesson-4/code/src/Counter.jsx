import React, { useState } from "react";

const Counter = ({ firstName }) => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    // setCounter(count + 1);//1
    // setCounter(count + 1);//1
    setCounter((prev) => prev + 1); //1
    setCounter((prev) => prev + 1); //2
  };

  return (
    <>
      <h4>Counter Update</h4>
      <p>{counter}</p>
      <button onClick={handleInc}>Inc</button>
    </>
  );
};

export default Counter;
