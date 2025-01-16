import { useEffect, useState } from "react";

import StarRating from "./StarRating";

import { movieApiURL } from "./constants";

const MovieDetails = ({ selectedID, handleClose }) => {
  const [movie, setMovie] = useState({});

  const {
    Title: title,
    Actors: actors,
    Genre: genre,
    Language: language,
    Plot: plot,
    Poster: poster,
    Released: released,
    imdbRating,
    Runtime: runtime,
    Director: director,
  } = movie;

  useEffect(() => {
    async function getMovieDetail() {
      const res = await fetch(`${movieApiURL}i=${selectedID}`);
      const data = await res.json();
      setMovie(data);
    }
    getMovieDetail();
  }, [selectedID]);

  return (
    <div>
      <button className="btn-back" onClick={handleClose}>
        &larr;
      </button>
      <img src={poster} alt={`Poster of ${title} movie`} />
      <div className="details-overview">
        <h2>{title}</h2>
        <p>
          {released} &bull; {runtime}
        </p>
        <p>{genre}</p>
        <div className="rating">
          <StarRating maxRating={10} size={20} />
        </div>
        <p>
          <span>⭐</span>
          {imdbRating} IMDb Rating
        </p>
        <section>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
          <p>
            {language && language.match(/.*,.* /) ? "Languages" : "Language"}
            :&nbsp;
            {language}
          </p>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;
