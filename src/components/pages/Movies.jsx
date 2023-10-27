import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';

import FormSearching from 'components/Form/Form';
// import toast from 'react-hot-toast';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState('');

  const querySearchMovies = queryValue => {
    setQuery(queryValue);
  };

  useEffect(() => {
    if (!query) return;

    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies(1, query);
        setMoviesData(fetchSearchMovie.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovies();
  }, [query]);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <FormSearching querySearchMovies={querySearchMovies} />
      <MovieList trendMovies={moviesData} />
    </div>
  );
}
