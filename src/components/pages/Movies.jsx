import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesData, setMoviesData] = useState([]);

  console.dir(searchParams);
  // console.log(moviesData);

  const hendleSubmitForm = evt => {
    evt.preventDefault();

    // setSearchValue('');
  };

  const handleChange = evt => {
    const searchQueryValue = evt.target.value;

    setSearchParams({ search: searchQueryValue });
  };

  const fetchedMovies = async () => {
    try {
      // const fetchSearchMovie = await searchMovies();
      // setMoviesData(fetchSearchMovie);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchedMovies();
  }, []);

  return (
    <>
      <form onSubmit={hendleSubmitForm}>
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
