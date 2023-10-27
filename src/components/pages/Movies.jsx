import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const [moviesData, setMoviesData] = useState([]);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.queryValueSearch.value;

    params.set('query', inputValue);

    setParams(params);
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
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          // value={query}
          placeholder="Введіть пошуковий запит"
          name="queryValueSearch"
          // onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList trendMovies={moviesData} />
    </div>
  );
}
