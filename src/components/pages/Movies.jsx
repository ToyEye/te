import MovieList from 'components/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesData, setMoviesData] = useState([]);
  // const [page, setPage] = useState(1);

  const validQuery = searchParams.get('searchQuery') ?? '';

  console.log(validQuery);
  // console.log(moviesData);

  const handleSubmitForm = evt => {
    evt.preventDefault();
  };

  const handleChange = evt => {
    const inputValue = evt.target.value;

    setSearchParams({ searchQuery: inputValue });
  };

  useEffect(() => {
    if (!validQuery) return;

    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies(1, validQuery);
        console.log(fetchSearchMovie.results);
        setMoviesData(fetchSearchMovie.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovies();
  }, [validQuery]);

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={validQuery}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList trendMovies={moviesData} />
    </>
  );
}
