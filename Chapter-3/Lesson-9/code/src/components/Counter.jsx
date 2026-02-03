import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onIncrement, onDecrement } from "../actions/action";

const Counter = () => {
  // to access/get the data from central storage
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch(); //we are dispatching action from component to reducer

  const updateDec = () => {
    dispatch(onDecrement(1));
  };

  const updateInc = () => {
    dispatch(onIncrement(2));
  };

  return (
    <div>
      <button onClick={updateDec}>-</button>
      <p>Count: {count}</p>
      <button onClick={updateInc}>+</button>
    </div>
  );
};

export default Counter;
