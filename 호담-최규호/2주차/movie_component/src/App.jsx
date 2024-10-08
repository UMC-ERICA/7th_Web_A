import React from 'react';
import { MOVIES } from './movie';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="movies-container">
        {MOVIES.results.map((movie) => ( //map으로 moview 데이터 가져오기
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
 );
}

export default App;