import Movie from "./components/Movie";
import styled from "styled-components";
import { MOVIES } from "./mocks/movies";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      {MOVIES.results.map((item) => (
        <Movie key={item.id} poster_path={item.poster_path} />
      ))}
    </AppContainer>
  );
}

export default App;
