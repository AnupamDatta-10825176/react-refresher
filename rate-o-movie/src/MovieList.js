import Movie from "./Movie";

const MovieList = ({ movies, handleSelectedID }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectedID={handleSelectedID}
        />
      ))}
    </ul>
  );
};

export default MovieList;
