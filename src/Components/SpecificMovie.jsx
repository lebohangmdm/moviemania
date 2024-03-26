import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetchMovie from "./hooks/useFetchMovie";
import { IoStar } from "react-icons/io5";
import { useGlobalContext } from "../context";

const SpecificMovie = () => {
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleAddMovies, watchedMovies } = useGlobalContext();

  const { isLoading, movie } = useFetchMovie(id);

  const alreadyWatched = watchedMovies
    .map((watched) => watched.id)
    .includes(movie.imdbID);

  const {
    Title: title,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    Rated: rated,
    imdbRating,
    Poster: image,
    Plot: plot,
  } = movie;

  const addMovie = () => {
    const newMovie = {
      id,
      title,
      image,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    handleAddMovies(newMovie);
  };

  useEffect(() => {
    if (!title) return;

    document.title = `MovieMania || ${title}`;

    return () => {
      document.title = "MovieMania";
    };
  }, [title]);

  if (isLoading) return <Loading />;

  return (
    <section className="section-height">
      <div className="container-center">
        <div className="flex gap-6">
          <div className="w-[30%] relative">
            <img src={image} alt={title} className="object-cover mx-auto" />
            <button
              className="absolute -top-4 left-6 py-2 px-4 text-3xl  text-white"
              onClick={() => navigate(-1)}
            >
              {" "}
              &larr;
            </button>
          </div>
          <div className="w-[60%]">
            <h2 className="font-medium text-stone-800  text-3xl mb-8">
              {title}
            </h2>
            <div className=" space-y-2">
              <p className="text-stone-800 ">
                {rated} || {genre}
              </p>
              <p className="text-stone-800 ">
                {released} - {runtime}{" "}
              </p>
              <div className="flex items-center gap-2">
                <span>
                  <IoStar className="text-lg text-amber-500" />
                </span>
                <p className="text-stone-800">
                  <strong className="text-lg">{imdbRating} </strong>
                  IMDB rating
                </p>
              </div>
            </div>

            <p className="text-stone-700 text-lg my-8">{plot}</p>
            <div className="flex flex-col gap-6 mt-8">
              {!alreadyWatched ? (
                <>
                  <p className="text-sm text-black">
                    Add your rating for this movie
                  </p>
                  {userRating ? (
                    <>
                      <StarRating
                        maxRating={10}
                        size={24}
                        onSetRating={setUserRating}
                      />
                      <div className="flex gap-4">
                        <button
                          className="py-3 px-6  font-semibold capitalize rounded-lg bg-blue-700  text-white hover:brightness-150 transition-all duration-100 cursor-pointer"
                          onClick={addMovie}
                        >
                          Add to watched list
                        </button>
                      </div>
                    </>
                  ) : (
                    <StarRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />
                  )}
                </>
              ) : (
                <p className="text-sm text-black">
                  You have rated the movie already
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificMovie;
