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
          <input onChange={(e) => setMovieTitle(e.target.value)}/>
        </label>
        <label>
          Year released:
          <input onChange={(e) => setMovieFormYearReleased(e.target.value)}/>
        </label>
        <label>
          Director:
          <input onChange={(e) => setMovieFormDirector(e.target.value)}/>
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