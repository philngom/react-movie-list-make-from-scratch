import './App.css';
import MovieForm from './MovieForm/MovieForm';
import MovieList from './MovieList/MovieList';
import { useState } from 'react';

function App() {

  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('blue');
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: `${movieTitle}${movieFormYearReleased}${movieFormDirector}`,
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

  function handleDelete(id) {
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(query) {
    const filter = allMovies.filter(movie => movie.name.includes(query));

    setFilteredMovies(filter);
  }

  return (
    <div className='App'>
      <div className='top'>
        <MovieForm
          setMovieFormYearReleased={setMovieFormYearReleased}
          setMovieFormDirector={setMovieFormDirector}
          setMovieFormColor={setMovieFormColor}
          setMovieTitle={setMovieTitle}
          movieFormYearReleased={movieFormYearReleased}
          movieFormDirector={movieFormDirector}
          movieTitle={movieTitle}
          handleSubmit={handleSubmit}
        />
        <div className='movie-preview' style={{ backgroundColor: movieFormColor }}>
          <p>Name: {movieTitle}</p>
          <p>Year: {movieFormYearReleased}</p>
          <p>Director: {movieFormDirector}</p>
        </div>
      </div>
      <div className='bottom'>
        <label>
          Search Movies:
          <input onChange={(e) => handleFilterMovies(e.target.value)}/>
        </label>
        <MovieList movies={filteredMovies.length ? filteredMovies : allMovies} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
