import React, { useState } from "react";
import Lifecycle from "./Lifecycle";
import UseEffect from "./UseEffect";
import Products from "./Products";
import "./App.css";

const App = () => {
  const [person, setPerson] = useState({
    salary: 909090,
    id: 1,
  });

  return (
    <>
      {/* <Lifecycle person={person} /> */}
      {/* <UseEffect /> */}
      <Products />
      <p className="error">Error</p>
    </>
  );
};

export default App;

// Task
// do an api call (product, movie) and display it in the form of cards in function based component
