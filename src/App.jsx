import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchedMovies from "./Components/WatchedMovies";
import Favourite from "./Components/Favourite";
import SingleMovie from "./Components/SpecificMovie";
import HeaderLayout from "./Components/HeaderLayout";
import Home from "./Components/Home";
import { useGlobalContext } from "./context";

function App() {
  const { state } = useGlobalContext();
  console.log(state);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<HeaderLayout />}>
            <Route index element={<WatchedMovies />} />
            <Route path=":id" element={<SingleMovie />} />
            <Route path="watched" element={<WatchedMovies />} />
            <Route path="favourite" element={<Favourite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
