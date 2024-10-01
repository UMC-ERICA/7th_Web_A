import Movie from "./components/Movie";
import { MOVIES } from "./mocks/movies";

function App() {
  const appContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  };

  return (
    <div style={appContainerStyle}>
      {MOVIES.results.map((item) => (
        <Movie key={item.id} poster_path={item.poster_path} />
      ))}
    </div>
  );
}

export default App;
