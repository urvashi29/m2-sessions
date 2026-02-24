import React from "react";
import axios from "axios";

const index = ({ user }) => {
  return <div>{user.email}</div>;
};

export default index;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  console.log("hello");
  const { params } = context;
  
  if (params.id >= 100) {
    // return {
    //   notFound: true,
    // };

    return {
      redirect: {
        destination: "/"
      }
    }
  }
  

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const data = await response.data;

  return {
    props: {
      user: data,
    },
  };
}
