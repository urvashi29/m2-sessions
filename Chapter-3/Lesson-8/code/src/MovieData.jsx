import React, { useContext, useState } from "react";
import MovieDisplay from "./MovieDisplay";
import { MovieContext } from "./context/MovieProvider";

const MovieData = () => {
  //   const [movies, setMovies] = useState([
  //     {
  //       id: 1,
  //       movieName: "Bandersnatch",
  //       genre: "thriller, sci-fi",
  //     },
  //     {
  //       id: 2,
  //       movieName: "Inception",
  //       genre: "sci-fi",
  //     },
  //   ]);

  const movies = useContext(MovieContext);

  return <MovieDisplay movies={movies} />;
};

export default MovieData;
