import './App.css';
import MovieForm from './MovieForm/MovieForm';
import { useState } from 'react';

function App() {

  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('blue');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMoviess] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      name: movieTitle,
      year: movieFormYearReleased,
      director: movieFormDirector,
      color: movieFormColor
    };

    setAllMovies([...allMovies, newMovie]);
    setMovieFormYearReleased('');
    setMovieFormDirector('');
    setMovieFormColor('blue');
    setMovieTitle('');
  }

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
          handleSubmit={handleSubmit}
        />
        <div className='movie-preview' style={{ backgroundColor: movieFormColor }}>
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
