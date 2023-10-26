import MovieList from 'components/MoviesList/MoviesList';
import { getMovieGenres } from 'helpers/API';
import { useContext, useEffect, useState } from 'react';

export default function Genre() {
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenreMovies = await getMovieGenres(14, 1);
        setGenresData(fetchedGenreMovies.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenre();
  }, []);

  return (
    <div>
      <button>Back</button>

      <MovieList trendMovies={genresData} />
    </div>
  );
}
