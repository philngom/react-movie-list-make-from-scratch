import './App.css';
import MovieForm from './MovieForm/MovieForm';
import { useState } from 'react';

function App() {

  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMoviess] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  return (
    <div className='App'>
      <div className='top'>
        <MovieForm
          movieFormYearReleased={movieFormYearReleased}
          movieFormDirector={movieFormDirector}
          movieFormColor={movieFormColor}
          movieTitle={movieTitle}
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormDirector={setMovieFormDirector}
          setMovieFormColor={setMovieFormColor}
          setMovieTitle={setMovieTitle}
        />
        <div className='movie-preview' color={movieFormColor}>
          <p>{movieTitle}</p>
          <p>{movieFormYearReleased}</p>
          <p>{movieFormDirector}</p>
        </div>
      </div>
      <div className='bottom'>
      </div>
    </div>
  );
}

export default App;
