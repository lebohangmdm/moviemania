import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { imdbID: id, Title: title, Year: year, Poster: image } = movie;
  return (
    <Link to={`${id}`}>
      <article>
        <img src={image} alt={title} className="object-cover" />
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl text-stone-800">{title}</p>
          <p className="text-xl text-stone-800">{year}</p>
        </div>
      </article>
    </Link>
  );
};

export default Movie;
