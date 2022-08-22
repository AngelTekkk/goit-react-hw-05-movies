import { Suspense, useState, useEffect } from 'react';
import {
  Outlet,
  NavLink,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import noposter from '../../assets/images/noposter.jpg';
import s from './MovieDetails.module.css';

function MovieDetails() {
  const [movieById, setMovieById] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId);
  }, [movieId]);

  async function fetchMovieById(movieId) {
    try {
      const movie = await themoviedbAPI.fetchById(movieId);
      setMovieById(movie.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Link className={s.link} to={backLinkHref}>
        Back to list
      </Link>
      {isLoading && <Loader />}
      {movieById && (
        <div className={s.movieCard}>
          <img
            className={s.poster}
            src={
              movieById.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieById.poster_path}`
                : noposter
            }
            alt={movieById.original_title}
          />
          <div>
            <h2 className={s.title}>{movieById.original_title}</h2>
            <p className={s.text}>
              User Score:{' '}
              <span className={s.score}>
                {movieById.vote_average.toFixed(1)}
              </span>{' '}
              / {movieById.vote_count}
            </p>
            <h3 className={s.subTitle}>Overview</h3>
            <p className={s.text}>{movieById.overview}</p>
            <h3 className={s.subTitle}>Genres</h3>
            <p className={s.genres}>
              {movieById?.genres?.length > 0
                ? movieById.genres.map(({ id, name }) => {
                    return <span key={id}>{name}</span>;
                  })
                : 'There are no genres available'}
            </p>
          </div>
        </div>
      )}
      <ul className={s.links}>
        <li>
          <NavLink
            className={s.button}
            to="cast"
            state={{ from: location.state?.from }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.button}
            to="reviews"
            state={{ from: location.state?.from }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
