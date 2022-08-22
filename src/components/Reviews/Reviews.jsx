import { Suspense, useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import s from './Reviews.module.css';

function Reviews() {
  const [movieReviewsById, setMovieReviewsById] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId);
  }, []);

  async function fetchMovieReviewsById(movieId) {
    try {
      const reviews = await themoviedbAPI.fetchReviewsById(movieId);
      setMovieReviewsById(reviews.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {movieReviewsById?.length > 0 ? (
        <ul className={s.list}>
          {movieReviewsById.map(review => {
            return (
              <li className={s.item} key={review.id}>
                <div className={s.thumb}>
                  {review.author_details.avatar_path &&
                  review.author_details.avatar_path.includes('gravatar') ? (
                    <img
                      width="40"
                      src={review.author_details.avatar_path.slice(1)}
                    />
                  ) : (
                    <img
                      width="40"
                      src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                    />
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
