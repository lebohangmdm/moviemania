import { useState } from "react";
import StarRating from "./StarRating";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetchMovie from "./hooks/useFetchMovie";

const SpecificMovie = () => {
  const [userRating, setUserRating] = useState(0);
  const { id } = useParams();

  const { isLoading, movie } = useFetchMovie(id);
  const { Title: title, Year: year, Poster: image, Plot: plot } = movie;

  console.log();
  if (isLoading) return <Loading />;

  return (
    <section>
      <div className="container-center">
        <div className="flex gap-6">
          <div className="w-[30%] relative">
            <img src={image} alt={title} className="object-cover mx-auto" />
            <button className="absolute -top-4 left-6 py-2 px-4 text-3xl  text-white  ">
              {" "}
              &larr;
            </button>
          </div>
          <div className="w-[60%]">
            <div className="space-y-4 ">
              <h2 className=" font-medium text-stone-800  text-3xl">{title}</h2>
              <p className="text-stone-700 text-lg">{plot}</p>
              <p className="text-stone-700 ">{year}</p>
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
