import React, { useEffect, useState } from "react";
import Form from "./Form";
import Display from "./Display";

const App = () => {
  const [users, setUsers] = useState([]);

  // It is called from Form Component
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // useEffect(() => {
  //   //post request
  // }, [users]);

  return (
    <>
      <Form addUser={addUser} />
      <Display users={users} />
    </>
  );
};

export default App;
