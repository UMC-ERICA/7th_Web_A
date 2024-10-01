import "./App.css";
import Movie from "./components/Movie";
import { MOVIES } from "./mocks/movies";

function App() {
  return (
    <div>
      <div className="app-container">
        {MOVIES.results.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <Movie poster_path={item.poster_path} />;
        })}
      </div>
    </div>
  );
}

export default App;
