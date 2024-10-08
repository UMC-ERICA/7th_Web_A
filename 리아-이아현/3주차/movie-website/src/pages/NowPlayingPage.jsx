import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const API_BEARER_TOKEN = import.meta.env.VITE_TMDB_API_BEARER_TOKEN;

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${API_BEARER_TOKEN}`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <>
      {movies.data?.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </>
  );
};

export default NowPlayingPage;
