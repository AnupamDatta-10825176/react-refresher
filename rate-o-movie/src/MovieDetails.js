import { useEffect, useState } from "react";

import StarRating from "./StarRating";
import Loading from "./Loading";

import { movieApiURL } from "./constants";

const stylePoster = {
  padding: "0.34rem",
  margin: "0.5rem",
  border: "2px solid #fff",
  borderRadius: "5%",
};

const MovieDetails = ({ selectedID, handleClose, onAddWatched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    UserRating: userRating,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      Poster: poster,
      Title: title,
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatched(newWatchedMovie);
  }

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoading(true);
      const res = await fetch(`${movieApiURL}i=${selectedID}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetail();
  }, [selectedID]);

  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleClose}>
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${title} movie`}
              style={stylePoster}
            />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>

              <p>
                <span>⭐</span>
                {imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={20} />
              <button className="btn-add" onClick={handleAdd}>
                + Add to watched
              </button>
            </div>
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
        </>
      )}
    </div>
  );
};

export default MovieDetails;
