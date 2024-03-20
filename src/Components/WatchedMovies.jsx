import { BsFillStarFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import React from "react";

const WatchedMovies = () => {
  return (
    <section>
      <div className="container-center">
        <h1 className="text-4xl text-stone-800 mb-12">My Watched Movies</h1>

        <div>
          <div className="flex justify-between bg-blue-200 p-4">
            <div className="flex items-center gap-4">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="batman"
                className="w-20 object-cover"
              />

              <div className="flex flex-col justify-between gap-8 ">
                <div></div>
                <p className="text-3xl font-medium">Batman The Dark Knight</p>
                <div className="flex  gap-4">
                  <div className="flex items-center gap-2">
                    <BsFillStarFill className="text-xl text-amber-500" />
                    <p className="text-xl"> 8.6</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsFillStarFill className="text-xl text-amber-500" />
                    <p className="text-xl">8</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoTimeOutline className="text-2xl text-amber-500" />
                    <p className="text-xl">169min</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FaTimes className="text-2xl text-red-500" />
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
    </section>
  );
};

export default WatchedMovies;
