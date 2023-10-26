import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import toast from 'react-hot-toast';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const [moviesData, setMoviesData] = useState([]);
  // const [page, setPage] = useState(1);

  // if (query.trim() === '') {
  //   return toast.error('Ведіть пошуковий запит!');
  // }

  const handleSubmitForm = evt => {
    evt.preventDefault();
  };

  const handleChange = evt => {
    const inputValue = evt.target.value;

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
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={query}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList trendMovies={moviesData} />
    </>
  );
}
