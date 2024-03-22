import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${API_URL}&s=${query}`);
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not found");

        setMovies(data.Search);
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }

      if (query.length < 2) {
        setMovies([]);
        setError("");
        return;
      }
    };
    fetchMovies();
  }, [query]);

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
