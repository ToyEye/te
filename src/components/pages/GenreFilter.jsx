import MovieList from 'components/MoviesList/MoviesList';
import { getMovieGenres } from 'helpers/API';
import { useEffect, useState } from 'react';

export default function GenreFilter() {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenreMovies = await getMovieGenres(14, 1);
        setGenreData(fetchedGenreMovies.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenre();
  }, []);

  return (
    <div>
      <button>Back</button>

      <MovieList trendMovies={genreData} />
    </div>
  );
}
