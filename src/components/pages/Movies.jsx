import MovieList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import FormSearching from 'components/Form/Form';
import toast from 'react-hot-toast';

import { ButtonLoadMore } from 'components/LoadMore/LoadMore';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [isloadMore, setIsLoadMore] = useState(false);

  const querySearchMovies = queryValue => {
    setQuery(queryValue);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies({
          page: page,
          query: query,
        });

        const totalResults = fetchSearchMovie.results;

        if (totalResults === 0) {
          toast.error('нічого не знайдено!');
        }

        setMoviesData(totalResults);

        setIsLoadMore(page < Math.ceil(totalResults / 20));
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
      {isloadMore && <ButtonLoadMore onClick={handleLoadMore} />}
    </div>
  );
}
