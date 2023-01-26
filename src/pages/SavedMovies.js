import React from "react";
import MovieList from "../components/MovieList";

export default function SavedMovies(props) {
  const { data } = props;
  return <MovieList data={data} />;
}
