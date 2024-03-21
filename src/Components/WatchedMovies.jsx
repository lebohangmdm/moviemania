import { BsFillStarFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import React from "react";

const WatchedMovies = () => {
  return (
    <section className="te bg-stone-500">
      <div className="container-center ">
        <h1 className="text-4xl text-black mb-12 text-center">
          Watched Movies
        </h1>

        <div className="max-w-4xl mx-auto bg-stone-50 p-8 rounded-xl">
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                  alt="batman"
                  className="w-16 object-cover"
                />

                <div className="flex flex-col justify-between gap-4 ">
                  <div></div>
                  <p className="text-xl font-medium text-black">
                    Batman The Dark Knight
                  </p>
                  <div className="flex  gap-2">
                    <div className="flex items-center gap-2">
                      <IoStar className="text-lg text-amber-500" />
                      <p className="text-lg"> 8.6</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillStarFill className="text-lg text-amber-600" />
                      <p className="text-lg">8</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoTimeOutline className="text-xl text-amber-500" />
                      <p className="text-lg">169min</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <FaTimes className="text-2xl text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchedMovies;
