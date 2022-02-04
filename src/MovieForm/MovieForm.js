import './MovieForm.css';

export default function MovieForm({
  movieFormYearReleased,
  movieFormDirector,
  movieFormColor,
  movieTitle,
  setMovieFormYearReleased,
  setMovieFormDirector,
  setMovieFormColor,
  setMovieTitle
}) {
  return (
    <div className="movie-form">
      <form>
        <label>
          Movie title:
          <input />
        </label>
        <label>
          Year released:
          <input />
        </label>
        <label>
          Director:
          <input />
        </label>
        <label>
          Select color:
          <select>
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