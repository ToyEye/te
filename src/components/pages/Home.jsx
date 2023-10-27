import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/LoadMore/LoadMore';

import MovieList from 'components/MoviesList/MoviesList';
import { getTrending } from 'helpers/API';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trend = await getTrending(page);

        setTrendMovies(prevTrend => {
          if (page === 1) {
            return [...trend.results];
          }
          return [...prevTrend, ...trend.results];
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending today</h2>
      <MovieList trendMovies={trendMovies} />
      <ButtonLoadMore handleLoadMore={handleLoadMore} />
    </div>
  );
}
