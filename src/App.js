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
        <MovieForm />
      </div>
      <div className='bottom'>

      </div>

    </div>
  );
}

export default App;
