import React, { useCallback, useEffect, useState } from "react";

const funcCount = new Set();

const index = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // const incrementCount = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const incrementNum = () => {
  //   setNum((prev) => prev + 1);
  // };

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementNum = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  funcCount.add(incrementCount);
  funcCount.add(incrementNum);

  return (
    <div>
      <h2>UseCallback</h2>
      Count : {count} & {num}
      <p>Count of set: {funcCount.size}</p>
      <button onClick={incrementCount}>Increase Count</button>
      <button onClick={incrementNum}>Increase Num</button>
    </div>
  );
};

export default index;
