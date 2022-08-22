import React, { useState, useEffect, lazy } from 'react';
import { themoviedbAPI } from 'services/themoviedbAPI';
import Loader from 'components/Loader/Loader';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  async function fetchTrendingMovies() {
    try {
      const movies = await themoviedbAPI.fetchTrending();
      setTrendingMovies(movies.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1 style={{ textAlign: 'center', color: '#2a2a2a', margin: '10px 0' }}>
        Trending today
      </h1>
      {isLoading ? <Loader /> : <MoviesList moviesList={trendingMovies} />}
    </main>
  );
};

export default Home;
