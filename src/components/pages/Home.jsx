import MovieList from 'components/MoviesList/MoviesList';
import { getTrending } from 'helpers/API';
import { useEffect, useState } from 'react';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  const fetchData = async () => {
    try {
      const trend = await getTrending();

      setTrendMovies(trend.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!trendMovies) {
      return;
    }

    fetchData();
  }, [trendMovies]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Trending today</h2>
      <MovieList trendMovies={trendMovies} />
    </div>
  );
}
