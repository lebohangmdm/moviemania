import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchedMovies from "./Components/WatchedMovies";
import Favourite from "./Components/Favourite";
import Movie from "./Components/Movie";
import HeaderLayout from "./Components/HeaderLayout";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="movies" element={<HeaderLayout />}>
            <Route index element={<WatchedMovies />} />
            <Route path="watched" element={<WatchedMovies />} />
            <Route path="favourite" element={<Favourite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
