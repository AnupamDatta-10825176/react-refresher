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

const MovieDetails = ({ selectedID, handleClose, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watchMovieUserRating = watched.find(
    (movie) => movie.imdbID
  )?.userRating;

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

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID,
      Poster: poster,
      Title: title,
      imdbRating: Number(imdbRating),
      userRating: Number(userRating),
      runtime: isNaN(Number(runtime.split(" ").at(0)))
        ? 0
        : Number(runtime.split(" ").at(0)),
    };

    onAddWatched(newWatchedMovie);

    // close the watched movie detail after added to watched list
    handleClose();
  }

  // fetch movie details from the api
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

  // set title of the page based on movie title
  useEffect(() => {
    if (!document.title) return;
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "RateOmovie";
    };
  }, [title]);

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
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={20}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to watched
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have rated this movie {watchMovieUserRating}
                  <span>⭐</span>
                </p>
              )}
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
