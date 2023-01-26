import React, { useState } from "react";
import { get } from "../services";
import MovieFilters from "../components/MovieFilters";
import MovieList from "../components/MovieList";

export default function SearchMovies(props) {
  const { handleAddToList } = props;
  const [movies, setMovies] = useState([]);

  const handleSearchMovies = async (queries) => {
    const { s } = queries;
    const response = get(
      `${process.env.REACT_APP_BASE_URL}/?s=${s}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const { Search } = await response;
    setMovies(Search);
  };

  return (
    <div>
      <MovieFilters handleSearchMovies={handleSearchMovies} />
      <MovieList data={movies} handleAddToList={handleAddToList} />
    </div>
  );
}
