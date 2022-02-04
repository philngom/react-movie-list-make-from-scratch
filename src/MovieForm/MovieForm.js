import './MovieForm.css';

export default function MovieForm() {
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
      </form>
    </div>
  );
}