import { Link, useLocation } from 'react-router-dom';
import noposter from '../../assets/images/noposter.jpg';
import s from './MovieItem.module.css';

function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          className={s.image}
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : noposter
          }
        />
        <p className={s.text}>{movie.original_title}</p>
      </Link>
    </li>
  );
}

export default MovieItem;
