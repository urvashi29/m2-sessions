import React from "react";

const MovieDisplay = ({ movies }) => {
  const moviesList = movies.length ? (
    movies.map((movie) => {
      return <p>{movie.movieName}</p>;
    })
  ) : (
    <p>No Post yet</p>
  );

  return <>{moviesList}</>;
};

export default MovieDisplay;
