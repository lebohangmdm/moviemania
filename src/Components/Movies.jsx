import { useGlobalContext } from "../context";
import Error from "./Error";
import Loading from "./Loading";
import Movie from "./Movie";

const Movies = () => {
  const { movies, error, isLoading } = useGlobalContext();

  if (isLoading) return <Loading />;

  return (
    <section className="section-height">
      <div className="container-center">
        <p className="text-xl mb-6">{movies.length} movies found</p>

        <div className="grid items-center justify-center  grid-cols-4 gap-12 ">
          {movies.map((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
