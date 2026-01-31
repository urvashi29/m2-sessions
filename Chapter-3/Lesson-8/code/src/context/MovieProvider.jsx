import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "Bandersnatch",
      genre: "thriller, sci-fi",
    },
    {
      id: 2,
      movieName: "Inception",
      genre: "sci-fi",
    },
  ]);

  //   const update = (props) => {
  //     setMovies();
  //   };

  console.log(children);

  return (
    <>
      <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
    </>
  );
};

export default MovieProvider;
