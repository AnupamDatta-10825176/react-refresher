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

// data and constants
import { tempWatchedData } from "./data";
import { movieApiURL } from "./constants";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // start showing loading message
    setIsLoading(true);

    // fetch data from external api
    async function fetchData() {
      const res = await fetch(`${movieApiURL}s=gravity`);
      const resJson = await res.json();
      // update movies with data fetched based on query.
      setMovies(resJson.Search);

      // end showing loading message
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {isLoading ? <Loading /> : <MovieList movies={movies} />}
        </ListBox>
        <WatchedBox>
          <WatchedSummery watched={watched} />
          <WatchedMoviesList watched={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}
