import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increment(1));
  };

  const handleDec = () => {
    dispatch(decrement(1));
  };

  return (
    <>
      <button onClick={handleDec}>-</button>
      {counter}
      <button onClick={handleInc}>+</button>
    </>
  );
};

export default Counter;
