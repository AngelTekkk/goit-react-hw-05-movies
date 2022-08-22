import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { themoviedbAPI } from 'services/themoviedbAPI';
import avatar from '../../assets/images/avatar-placeholder-1-225x300-1-200x300.png';
import s from './Cast.module.css';

function Cast() {
  const [movieCastById, setMovieCastById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCastById(movieId);
  }, [movieId]);

  async function fetchMovieCastById(movieId) {
    try {
      setIsLoading(true);
      const cast = await themoviedbAPI.fetchCastById(movieId);
      setMovieCastById(cast.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loader />}
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
                  alt={actor.name}
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
