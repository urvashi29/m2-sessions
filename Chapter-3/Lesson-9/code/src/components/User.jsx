import React, { useEffect } from "react";
import axios from "axios";
import { onGetUsers } from "../actions/action";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetUsers());
  }, []);

  const userList =
    users.length &&
    users.map((user) => {
      return <p key={user.id}>{user.email}</p>;
    });

  return <>{userList}</>;
};

export default User;

// &&
// ? () : ()
// ?.
// let sample = null;
// let name = "alex";

// let result = sample ?? name;