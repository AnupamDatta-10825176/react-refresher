// external libraries
import { useState, useEffect } from "react";

// Custom components
import Navbar from "./Navbar";
import Main from "./Main";
import NumResults from "./NumResults";
import Search from "./Search";
import ListBox from "./Listbox";
import WatchedBox from "./Watchedbox";
import MovieList from "./MovieList";
import WatchedSummery from "./WatchedSummery";
import WatchedMoviesList from "./WatchedList";
import Loading from "./Loading";
import ErrorMessage from "./Error";

// data and constants
import { tempWatchedData } from "./data";
import { movieApiURL } from "./constants";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // start showing loading message
    setIsLoading(true);

    // reset error message
    setError("");

    // fetch data from external api
    async function fetchData() {
      try {
        const res = await fetch(`${movieApiURL}s=${query}`);
        // throw error if counter issue during fetching data
        if (!res.ok) {
          throw new Error("Something went wrong while fetching the data");
        }

        // parse response data
        const resJson = await res.json();

        // if no movie with the name entered is found throw error.
        if (resJson.Response === "False") {
          throw new Error("Movie not found");
        }
        // update movies with data fetched based on query.
        setMovies(resJson.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        // end showing loading message
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      setIsLoading(false);
      return;
    }
    fetchData();
  }, [query]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}
          {/* loading stage */}
          {isLoading && <Loading />}
          {/* if no error is there */}
          {!isLoading && !error && <MovieList movies={movies} />}
          {/* if we encounter any error during data fetching */}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <WatchedBox>
          <WatchedSummery watched={watched} />
          <WatchedMoviesList watched={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}
