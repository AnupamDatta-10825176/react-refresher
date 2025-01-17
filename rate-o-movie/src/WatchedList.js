import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched, setWatched }) => {
  function handleRemoveWatched(id) {
    setWatched(watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          handleOnClick={(id) => handleRemoveWatched(id)}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
