import { Suspense, useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import avatar from '../../assets/images/avatar-placeholder-1-225x300-1-200x300.png';
import s from './Cast.module.css';

function Cast() {
  const [movieCastById, setMovieCastById] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCastById(movieId);
  }, []);

  async function fetchMovieCastById(movieId) {
    try {
      const cast = await themoviedbAPI.fetchCastById(movieId);
      setMovieCastById(cast.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {movieCastById && (
        <ul className={s.castCards}>
          {movieCastById.cast.map(actor => {
            return (
              <li className={s.castCard} key={actor.id}>
                <img
                  className={s.img}
                  width="200"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : avatar
                  }
                />
                <p className={s.text}>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cast;
