import { useEffect, useState } from "react";
import axios from "axios";
import MovieGrid from "../components/MovieGrid";

const API_BEARER_TOKEN = import.meta.env.VITE_TMDB_API_BEARER_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/top_rated?language=ko-KR&page=1`,
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

  return <MovieGrid movies={movies}></MovieGrid>;
};

export default TopRatedPage;
