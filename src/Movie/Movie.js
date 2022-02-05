import './Movie.css';

export default function Movie({ movie }) {
  return (
    <div className='movie' style={{ backgroundColor: movie.color }}>
      <p>Name: {movie.name}</p>
      <p>Year: {movie.year}</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}