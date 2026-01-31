import React from "react";
import MovieCount from "./MovieCount";
import MovieData from "./MovieData";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  return (
    <>
      <MovieProvider>
        <MovieData />
        <MovieCount />
      </MovieProvider>
    </>
  );
};

export default App;
