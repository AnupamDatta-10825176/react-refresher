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

// data and constants
import { tempWatchedData } from "./data";
import { movieApiURL } from "./constants";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${movieApiURL}s=gravity`);
      const resJson = await res.json();
      setMovies(resJson.Search);
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
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox>
          <WatchedSummery watched={watched} />
          <WatchedMoviesList watched={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}
