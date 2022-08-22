import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { themoviedbAPI } from 'services/themoviedbAPI';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchQuery(searchParams.get('query'));
    }
    if (searchQuery) {
      fetchMoviesByQuery();
    }

    async function fetchMoviesByQuery() {
      try {
        setIsLoading(true);
        const movies = await themoviedbAPI.fetchByQuery(searchQuery);
        setMoviesByQuery(movies.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [searchQuery, searchParams]);

  const handleSearchQuery = searchQuery => {
    if (searchQuery !== '' && searchQuery !== searchParams.get('query')) {
      setSearchQuery(searchQuery);
      setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
    } else {
      return;
    }
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearchQuery} />
      {isLoading && <Loader />}
      {moviesByQuery && !isLoading && <MoviesList moviesList={moviesByQuery} />}
    </main>
  );
};

export default Movies;
