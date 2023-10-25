import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [searchValue, setSearchValue] = useState('matrix');
  const [moviesData, setMoviesData] = useState([]);

  console.dir(searchValue);
  console.log(moviesData);

  const hendleSubmitForm = evt => {
    evt.preventDefault();

    setSearchValue('');
  };

  const handleChange = evt => {
    const searchQueryValue = evt.target.value;
    setSearchValue(searchQueryValue);
  };

  const fetchedMovies = async () => {
    if (!searchValue) return;
    try {
      const fetchSearchMovie = await searchMovies(searchValue);
      setMoviesData(fetchSearchMovie);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchedMovies();
  }, [searchValue]);

  return (
    <>
      <form onSubmit={hendleSubmitForm}>
        <input
          type="text"
          value={searchValue}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
