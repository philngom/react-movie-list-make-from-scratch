import './App.css';
import MovieForm from './MovieForm/MovieForm';
import { useState } from 'react';

function App() {

  const [movieFormName, setMovieFormName] = useState('');
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  return (
    <div>
      <div className='top'>
        <MovieForm />
      </div>
      <div className='bottom'>

      </div>

    </div>
  );
}

export default App;
