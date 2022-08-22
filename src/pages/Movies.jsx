import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchQuery(searchParams.get('query'));
    }
    if (searchQuery) {
      fetchMoviesByQuery();
    }
  }, [searchQuery]);

  async function fetchMoviesByQuery() {
    try {
      const movies = await themoviedbAPI.fetchByQuery(searchQuery);
      setMoviesByQuery(movies.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearchQuery} />
      {moviesByQuery && <MoviesList moviesList={moviesByQuery} />}
    </main>
  );
};

export default Movies;
