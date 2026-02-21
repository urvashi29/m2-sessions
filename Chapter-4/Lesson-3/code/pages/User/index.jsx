import Link from "next/link";

export default function index({ users }) {
  const userList = users.length ? (
    users.map((user) => <p><Link href={`/User/${user.id}`}>{user.name}</Link></p>)
  ) : (
    <p> No post yet </p>
  );

  return (
    <>
      <div>{userList}</div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
