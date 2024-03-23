import { useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`;

const useFetchMovie = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}&i=${id}`);
        if (!res.ok) throw new Error("Failed to the movie");

        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return { isLoading, movie };
};

export default useFetchMovie;
