import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import FormSearching from 'components/Form/Form';
// import toast from 'react-hot-toast';

import { ButtonLoadMore } from 'components/LoadMore/LoadMore';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';

  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);

  // const [isloadMore, setIsLoadMore] = useState(false);

  const querySearchMovies = queryValue => {
    params.set('q', queryValue);
    setParams(params);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies(page, query);

        const totalResults = fetchSearchMovie.results;

        // if (totalResults === 0) {
        //   toast.error('нічого не знайдено!');
        // }

        // setMoviesData(totalResults);
        setMoviesData(prevMoviesData => {
          if (page === 1) {
            return [...totalResults];
          }
          return [...prevMoviesData, ...totalResults];
        });
        // setIsLoadMore(page < Math.ceil(totalResults / 20));
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovies();
  }, [query, page]);

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <FormSearching
        querySearchMovies={querySearchMovies}
        defaultValue={query}
      />
      <MovieList trendMovies={moviesData} />
      {moviesData.length !== 0 && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
}
