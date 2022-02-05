import './Movie.css';

export default function Movie({ movie, handleDelete }) {
  return (
    <div className='movie' style={{ backgroundColor: movie.color }} onClick={ () => handleDelete(movie.id) }>
      <p>Name: {movie.name}</p>
      <p>Year: {movie.year}</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}