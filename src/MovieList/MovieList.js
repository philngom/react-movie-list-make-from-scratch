import './MovieList.css';
import Movie from '../Movie/Movie';

export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) =>
          <Movie key={movie + i} movie={movie}/>
        )
      }
    </div>
  );
}