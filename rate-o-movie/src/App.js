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
import MovieDetails from "./MovieDetails";
import WatchedSummery from "./WatchedSummery";
import WatchedMoviesList from "./WatchedList";
import Loading from "./Loading";
import ErrorMessage from "./Error";

// data and constants
import { movieApiURL } from "./constants";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [watched, setWatched] = useState(() => {
    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    return JSON.parse(storedWatchedMovies);
  });

  function handleSelectedID(movieID) {
    // if click on the same movie name close the selected movie detail
    setSelectedID((selectedID) => (selectedID === movieID ? null : movieID));
  }

  function handleClose() {
    setSelectedID(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    const controller = new AbortController();
    // start showing loading message
    setIsLoading(true);

    // reset error message
    setError("");

    // fetch data from external api
    async function fetchData() {
      try {
        const res = await fetch(`${movieApiURL}s=${query}`, {
          signal: controller.signal,
        });
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
        if (err.name !== "AbortError") {
          setError(err.message);
        }
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

    return function () {
      controller.abort();
    };
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
          {!isLoading && !error && (
            <MovieList movies={movies} handleSelectedID={handleSelectedID} />
          )}
          {/* if we encounter any error during data fetching */}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <WatchedBox>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              handleClose={handleClose}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummery watched={watched} />
              <WatchedMoviesList watched={watched} setWatched={setWatched} />
            </>
          )}
        </WatchedBox>
      </Main>
    </>
  );
}
