import React from "react";
import Link from "next/link";
import axios from "axios";

const User = ({ users }) => {
  const userList = users.length ? (
    users.map((user) => {
      return (
        <p>
          <Link href={`/User/${user.id}`}>{user.username}</Link>
        </p>
      );
    })
  ) : (
    <p>No post Yet!</p>
  );

  return <div>{userList}</div>;
};

export default User;

export async function getStaticProps() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await response.data;

  return {
    props: {
      users: data,
    },
  };
}
