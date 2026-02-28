import React, { use } from "react";
import { connectToDatabase } from "@/mongo";

const Home = ({ users }) => {
  const userList = users.length && users.map((user) => <p>{user.name}</p>);
  return <div>{userList}</div>;
};

export default Home;

export async function getServerSideProps() {
  // const response = await fetch("http://localhost:3000/api/users");
  // const users = await response.json();

  const client = await connectToDatabase();
  const db = client.db();
  const userCollection = db.collection("users");
  const users = await userCollection.find().toArray();

  // This will return to client component
  return {
    props: {
      users: users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      })),
    },
  };
}
