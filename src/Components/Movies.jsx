import { useGlobalContext } from "../context";
import Error from "./Error";
import Loading from "./Loading";
import Movie from "./Movie";

const Movies = () => {
  const { movies, error, isLoading } = useGlobalContext();
  console.log(error);
  console.log(movies.length);

  if (isLoading) return <Loading />;

  return (
    <section>
      <div className="container-center">
        <p className="text-xl mb-6">{movies.length} movies found</p>

        <div className="grid items-center justify-center gap-6  sm:grid-cols-2  md:gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 ">
          {movies.map((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
