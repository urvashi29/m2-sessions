import React from "react";

const Display = ({ users }) => {
  return (
    <>
      {users.length
        ? users.map((user) => <p>{user.firstName}</p>)
        : "No User Yet!"}
    </>
  );
};

export default Display;
