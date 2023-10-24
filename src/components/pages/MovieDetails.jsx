import { getMovieDetails } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [aboutMovie, setAboutMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (!params.movieId) {
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const detailInfo = await getMovieDetails(params.movieId);
        setAboutMovie(detailInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieDetails();
  }, [params.movieId]);

  return (
    <div>
      {aboutMovie && (
        <>
          <h1>{aboutMovie.original_title}</h1>
          <p>User Score: {Math.ceil(aboutMovie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{aboutMovie ? aboutMovie.overview : 'No overview available'}</p>
          <h2>Genres</h2>
          <ul>
            {aboutMovie &&
              aboutMovie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </>
      )}
    </div>
  );
}
