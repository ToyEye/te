import FormSearching from 'components/Form/Form';
import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set('query', searchQuery);
    setSearchParams(searchQuery);

    // setSearchParams({ query: searchQuery });
  }, [searchQuery, setSearchParams]);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchedMovies = async () => {
      try {
        const params = new URLSearchParams(searchParams);
        const query = params.get('query') || '';

        const fetchSearchMovie = await searchMovies(1, query);
        setMoviesData(fetchSearchMovie.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovies();
  }, [searchParams]);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <FormSearching onSearch={handleSearch} />
      <MovieList trendMovies={moviesData} />
    </div>
  );
}
