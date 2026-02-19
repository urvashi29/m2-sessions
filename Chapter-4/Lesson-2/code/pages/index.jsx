// import React from "react";

// const Home = ({ recipes }) => {
//   return (
//     <>
//       {recipes.map((recipe) => (
//         <p key={recipe.idCategory}>{recipe.strCategory}</p>
//       ))}
//     </>
//   );
// };

// export default Home;

// import path from "path";
// import fsPromises from "fs/promises";

// // fs -> file system
// // cwd -> current working directory
// export async function getStaticProps() {
//   console.log("getstatic revalidation");
//   const filePath = path.join(process.cwd(), "recipedata/recipes.json");
//   const data = await fsPromises.readFile(filePath);
//   const recipes = JSON.parse(data);

//   return {
//     props: {
//       recipes,
//     },
//     revalidate: 30,
//   };
// }

// Client side rendering
// SWR
import React, { useEffect } from "react";
import useSWR from "swr";

const Home = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data } = useSWR("http://localhost:3000/api/hello", fetcher);

  console.log(data);

  return <div>Home</div>;
};

export default Home;
