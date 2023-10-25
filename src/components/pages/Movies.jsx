import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesData, setMoviesData] = useState([]);

  const validQuery = searchParams.get('searchQuery') ?? '';

  console.log(validQuery);
  // console.log(moviesData);

  const handleSubmitForm = evt => {
    evt.preventDefault();

    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies(1, validQuery);
        // setMoviesData(fetchSearchMovie);
      } catch (err) {
        console.log(err);
      }
    };
  };

  const handleChange = evt => {
    const inputValue = evt.target.value;

    setSearchParams({ searchQuery: inputValue });
  };

  useEffect(() => {
    // fetchedMovies();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          // value={{}}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
