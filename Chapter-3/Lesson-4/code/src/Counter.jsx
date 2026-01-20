import React, { useState } from "react";

const Counter = ({ firstName }) => {
  const [counter, setCounter] = useState(0);

  const handleInc = async () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
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
