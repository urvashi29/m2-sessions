import React, { useState } from "react";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import User from "./components/User";

const App = () => {
  return (
    <>
      <Counter />
      <CounterTwo />
      <User />
    </>
  );
};

export default App;

// Task
// Add employee & delete
