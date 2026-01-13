import React, { use } from "react";
import "./Display.css";

// Function based component
const Display = ({ user }) => {
  return (
    <React.Fragment>
      <h2 className="heading">
        My name is {user.firstName}, living in {user.city}
      </h2>
      <p>Hello</p>
    </React.Fragment>
  );
};

export default Display;
