import React, { useState } from "react";
import { get } from "../services";
import MovieFilters from "../components/MovieFilters";
import MovieList from "../components/MovieList";

export default function SearchMovies(props) {
  const { handleAddToList, savedMoviesMap, handleRemoveFromList } = props;
  const [movies, setMovies] = useState([]);

  const handleSearchMovies = async (queries) => {
    const { s } = queries;
    const response = get(`/movies?s=${s}`);
    const { Search } = await response;
    setMovies(Search);
  };

  return (
    <div>
      <MovieFilters handleSearchMovies={handleSearchMovies} />
      <MovieList
        data={movies}
        handleAddToList={handleAddToList}
        savedMoviesMap={savedMoviesMap}
        handleRemoveFromList={handleRemoveFromList}
      />
    </div>
  );
}
