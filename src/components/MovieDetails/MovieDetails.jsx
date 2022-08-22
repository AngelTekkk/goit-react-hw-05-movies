import { Suspense, useState, useEffect } from 'react';
import {
  Outlet,
  NavLink,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import noposter from '../../assets/images/noposter.jpg';
import s from './MovieDetails.module.css';

function MovieDetails(movie) {
  const [movieById, setMovieById] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(backLinkHref);

  useEffect(() => {
    fetchMovieById(movieId);
  }, []);

  async function fetchMovieById(movieId) {
    try {
      const movie = await themoviedbAPI.fetchById(movieId);
      setMovieById(movie.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <Link to={backLinkHref}>Back to list</Link> */}
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Back
      </button>
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
          <NavLink className={s.button} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={s.button} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
