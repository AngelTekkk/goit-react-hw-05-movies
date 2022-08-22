import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';
import noavatar from '../../assets/images/avatar-placeholder-1-225x300-1-200x300.png';
import s from './Reviews.module.css';

function Reviews() {
  const [movieReviewsById, setMovieReviewsById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId);
  }, [movieId]);

  async function fetchMovieReviewsById(movieId) {
    try {
      setIsLoading(true);
      const reviews = await themoviedbAPI.fetchReviewsById(movieId);
      setMovieReviewsById(reviews.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      {movieReviewsById && movieReviewsById.length > 0 ? (
        <ul className={s.list}>
          {movieReviewsById.map(review => {
            return (
              <li className={s.item} key={review.id}>
                <div className={s.thumb}>
                  {review.author_details.avatar_path ? (
                    review.author_details.avatar_path.includes('gravatar') ? (
                      <img
                        width="40"
                        src={review.author_details.avatar_path.slice(1)}
                        alt={review.author}
                      />
                    ) : (
                      <img
                        width="40"
                        src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                        alt={review.author}
                      />
                    )
                  ) : (
                    <img width="40" src={noavatar} alt={review.author} />
                  )}
                  <h3 className={s.title}>{review.author}</h3>
                </div>
                <p className={s.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className={s.notification}>We don`t have any reviews yet</h2>
      )}
    </>
  );
}

export default Reviews;
