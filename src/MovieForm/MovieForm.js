import './MovieForm.css';

export default function MovieForm({
  setMovieFormYearReleased,
  setMovieFormDirector,
  setMovieFormColor,
  setMovieTitle,
  handleSubmit,
  movieTitle,
  movieFormDirector,
  movieFormYearReleased
}) {
  return (
    <div className="movie-form">
      <form onSubmit={ handleSubmit }>
        <label>
          Movie title:
          <input required value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
        </label>
        <label>
          Year released:
          <input required value={movieFormYearReleased} onChange={(e) => setMovieFormYearReleased(e.target.value)}/>
        </label>
        <label>
          Director:
          <input required value={movieFormDirector} onChange={(e) => setMovieFormDirector(e.target.value)}/>
        </label>
        <label>
          Select color:
          <select onChange={(e) => setMovieFormColor(e.target.value)}>
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='purple'>Purple</option>
            <option value='orange'>Orange</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}