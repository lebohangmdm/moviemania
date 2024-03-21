import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([``]);
  const [query, setQuery] = useState("the menu");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}&s=${query}`);
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        if (data.Response === "False") setError(data.Error);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // console.log(movies);
  // console.log(error);

  return (
    <AppContext.Provider
      value={{
        movies,
        query,
        isLoading,
        error,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
