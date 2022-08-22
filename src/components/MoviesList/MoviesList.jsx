import MovieItem from 'components/MovieItem/MovieItem';
import s from './MoviesList.module.css';

function MoviesList({ moviesList }) {
  return (
    <ul className={s.movieCards}>
      {moviesList.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
