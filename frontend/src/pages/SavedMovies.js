import React from "react";
import MovieList from "../components/MovieList";

export default function SavedMovies(props) {
  const { data, savedMoviesMap, handleRemoveFromList } = props;
  return (
    <MovieList
      data={data}
      savedMoviesMap={savedMoviesMap}
      handleRemoveFromList={handleRemoveFromList}
    />
  );
}
