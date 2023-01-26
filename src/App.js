import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchMovies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
