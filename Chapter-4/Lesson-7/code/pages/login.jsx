import { useRouter } from "next/router";
import React, { useState } from "react";

const login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const res = fetch("/api/login", {
        body: JSON.stringify({ userName, password }),
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      router.push("/");

      // time set
      // if(time > 15 min ) {
      //   logout api call
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          placeholder="Please enter username"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="pwd">Password</label>
        <input
          placeholder="Please enter pwd"
          id="pwd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default login;
