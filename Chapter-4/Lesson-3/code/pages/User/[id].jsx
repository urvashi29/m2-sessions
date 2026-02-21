import { useRouter } from "next/router";
import React from "react";

const User = ({ user }) => {
  // routing params in client side
  const router = useRouter();
  console.log(router.query.id);
  return <div>{user.name}</div>;
};

export default User;

export async function getServerSideProps(context) {
  //routing params at server side
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
}
