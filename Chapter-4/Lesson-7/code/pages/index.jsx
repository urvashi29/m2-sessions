import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      fetch("/api/getuser").then(async (res) => {
        const response = await res.json();
        if (!response.loggedIn) {
          router.push("/login");
        } else {
          console.log(response);
          setUser(response);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const logout = async () => {
    await fetch("/api/logout");
    router.push("/login");
  };

  return (
    <>
      <p>Name: {user?.username}</p>
      <p>Name: {user?.age}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
