import { useState } from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import { tempMovieData } from "./data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
