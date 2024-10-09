import styled from "styled-components";
import Movie from "./Movie";

const MovieGridStyle = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 25px;
  padding: 20px;
  width: 100%;
`;

const MovieGrid = ({movies}) => {
  return (
    <MovieGridStyle>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
        />
      ))}
    </MovieGridStyle>
  );
};

export default MovieGrid;
