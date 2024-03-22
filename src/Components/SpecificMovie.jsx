import { useState } from "react";
import StarRating from "./StarRating";

const SpecificMovie = () => {
  const [userRating, setUserRating] = useState(0);
  return (
    <section>
      <div className="container-center">
        <div className="flex gap-6">
          <div className="w-[30%] relative">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              alt="batman"
              className="object-cover mx-auto"
            />
            <button className="absolute -top-4 left-6 py-2 px-4 text-3xl  text-white  ">
              {" "}
              &larr;
            </button>
          </div>
          <div className="w-[60%]">
            <div className="space-y-4 ">
              <h2 className=" font-medium text-stone-800  text-3xl">
                Batman Begins
              </h2>
              <p className="text-stone-700 text-lg">
                After witnessing his parents' death, Bruce learns the art of
                fighting to confront injustice. When he returns to Gotham as
                Batman, he must stop a secret society that intends to destroy
                the city.
              </p>
              <p className="text-stone-700 ">2018</p>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />
              <div className="flex gap-4">
                <button className="py-2 px-4  font-semibold capitalize rounded-lg  text-stone-800 hover:bg-white hover:text-stone-800 transition-all duration-100 cursor-pointer hover:outline outline-2 outline-blue-500 ">
                  Add to watched list
                </button>
                <button className=" py-2 px-4 font-semibold capitalize rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-200">
                  Add to favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificMovie;
