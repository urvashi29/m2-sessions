import React, { useState, useMemo } from "react";

const index = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  // earlier
  // const squaredNumber = squareNum(num);

  // with useMemo()
  const squaredNumber = useMemo(() => {
    return squareNum(num);
  }, [num]);

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <React.Fragment>
       <h2>UseMemo</h2>
      <input
        type="text"
        placeholder="Please enter Number"
        onChange={handleChange}
        value={num}
      />
      <p>{squaredNumber}</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </React.Fragment>
  );
};

function squareNum(num) {
  console.log("square the value!");
  return Math.pow(num, 2);
}
export default index;
