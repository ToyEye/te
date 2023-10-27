import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/LoadMore/LoadMore';

import MovieList from 'components/MoviesList/MoviesList';
import { getTrending } from 'helpers/API';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [isAvailableData, setIsAvailableData] = useState(false);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    // if (trendMovies.length !== 0) return;

    const fetchData = async () => {
      try {
        // setIsAvailableData(false);

        const trend = await getTrending(page);

        setTrendMovies(prevTrend => {
          if (page === 1) {
            return [...trend.results];
          }
          return [...prevTrend, ...trend.results];
        });
      } catch (err) {
        console.log(err);
      } finally {
        // setIsAvailableData(true);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending today</h2>
      <MovieList trendMovies={trendMovies} />
      {setIsAvailableData && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
}
