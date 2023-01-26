import { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    setSavedMovies(movies);
  }, []);

  const handleAddToList = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovie = [movie, ...savedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovie));
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<SearchMovies handleAddToList={handleAddToList} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies data={savedMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
