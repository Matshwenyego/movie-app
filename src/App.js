import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import SearchMovies from "./pages/SearchMovies";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <SearchMovies />
    </div>
  );
}

export default App;
