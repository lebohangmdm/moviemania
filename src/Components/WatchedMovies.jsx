import { BsFillStarFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import React from "react";
import { useGlobalContext } from "../context";

const WatchedMovies = () => {
  const { watchedMovies, deleteMovie } = useGlobalContext();

  return (
    <section className=" bg-stone-500 section-height ">
      <div className="container-center ">
        <h1 className="text-4xl text-black mb-12 text-center">
          Watched Movies
        </h1>

        <div className="max-w-4xl mx-auto  bg-stone-50  rounded-xl">
          {watchedMovies.map((movie) => {
            return (
              <div key={movie.id} className="flex justify-between py-4 px-8 ">
                <div className="flex items-center gap-4">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-16 object-cover"
                  />

                  <div className="flex flex-col justify-between gap-4 ">
                    <div></div>
                    <p className="text-xl font-medium text-black">
                      {movie.title}
                    </p>
                    <div className="flex  gap-4">
                      <div className="flex items-center gap-1">
                        <IoStar className="text-lg text-amber-500" />
                        <p className="text-lg">{movie.imdbRating}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillStarFill className="text-lg text-amber-600" />
                        <p className="text-lg">{movie.userRating}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoTimeOutline className="text-xl text-amber-500" />
                        <p className="text-lg">{movie.runtime} min</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button onClick={() => deleteMovie(movie.id)}>
                    <FaTimes className="text-2xl text-red-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WatchedMovies;
