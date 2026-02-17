export default function Home({ users }) {
  const userList = users.length ? (
    users.map((user) => <p>{user.name}</p>)
  ) : (
    <p> No post yet </p>
  );

  return (
    <>
      <div>{userList}</div>
    </>
  );
}

// This will execute on server end.
export async function getServerSideProps() {
  console.log("getServerSideProps");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // This will return to client component
  return {
    props: {
      users: data,
    },
  };
}

// about, contact, home content
// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   // This will return to client component
//   return {
//     props: {
//       users: data,
//     },
//   };
// }
