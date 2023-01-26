import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";

function App() {
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
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
