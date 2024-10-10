import instance from './instance';

// NowPlaying 영화 데이터를 가져오는 함수
export const getNowPlayingMovies = (page = 1) => {
  return instance.get(`/movie/now_playing?language=ko-KR&page=${page}`);
};

// Popular 영화 데이터를 가져오는 함수
export const getPopularMovies = (page = 1) => {
  return instance.get(`/movie/popular?language=ko-KR&page=${page}`);
};

// TopRated 영화 데이터를 가져오는 함수
export const getTopRatedMovies = (page = 1) => {
  return instance.get(`/movie/top_rated?language=ko-KR&page=${page}`);
};

// UpComing 영화 데이터를 가져오는 함수
export const getUpComingMovies = (page = 1) => {
  return instance.get(`/movie/upcoming?language=ko-KR&page=${page}`);
};
