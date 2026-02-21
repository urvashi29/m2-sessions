import Link from "next/link";
import axios from "axios";

export default function index({ employees }) {
  const empList = employees.length ? (
    employees.map((emp) => <p>{emp.employee_name}</p>)
  ) : (
    <p> No post yet </p>
  );

  return (
    <>
      <div>{empList}</div>
    </>
  );
}

export async function getServerSideProps() {
  let employees = [];
  try {
    let response = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees",
    );
    console.log(response);
    employees = await response.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      employees: employees?.data,
    },
  };
}
