import { useState } from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import NumResults from "./NumResults";
import Search from "./Search";
import ListBox from "./Listbox";
import WatchedBox from "./Watchedbox";
import MovieList from "./MovieList";
import WatchedSummery from "./WatchedSummery";
import WatchedMoviesList from "./WatchedList";
import { tempMovieData, tempWatchedData } from "./data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

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
