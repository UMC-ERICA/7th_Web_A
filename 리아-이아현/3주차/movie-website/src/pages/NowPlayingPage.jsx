import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "../components/Movie";

const API_BEARER_TOKEN = import.meta.env.VITE_TMDB_API_BEARER_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
`;

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_BEARER_TOKEN}`,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <Movie key={movie.id} poster_path={movie.poster_path} />
      ))}
    </MovieGrid>
  );
};

export default NowPlayingPage;
