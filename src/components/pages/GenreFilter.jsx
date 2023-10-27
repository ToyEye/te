import MovieList from 'components/MoviesList/MoviesList';
import { getMovieGenres } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GenreFilter() {
  const [genreData, setGenreData] = useState([]);
  const paramsGenre = useParams();
  const genreId = paramsGenre.GenreId;
  console.log(genreId);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenreMovies = await getMovieGenres(1, genreId);
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
