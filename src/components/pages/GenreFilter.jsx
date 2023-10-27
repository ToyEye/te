import MovieList from 'components/MoviesList/MoviesList';
import { getMovieGenres } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GenreFilter() {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenreMovies = await getMovieGenres(1, 14);
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
      <span>добавити в адр рядок /GenreFilter</span>
      <MovieList trendMovies={genreData} />
    </div>
  );
}
