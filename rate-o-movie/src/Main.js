import ListBox from "./Listbox";
import WatchedBox from "./Watchedbox";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
