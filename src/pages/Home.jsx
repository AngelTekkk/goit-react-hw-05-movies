import React, { useState, useEffect } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  async function fetchTrendingMovies() {
    try {
      const movies = await themoviedbAPI.fetchTrending();
      setTrendingMovies(movies.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1 style={{ textAlign: 'center', color: '#2a2a2a', margin: '10px 0' }}>
        Trending today
      </h1>
      <MoviesList moviesList={trendingMovies} />
    </main>
  );
};

export default Home;
