import { getMovieDetails } from 'helpers/API';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

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

  console.log(params.movieId);

  return (
    <div>
      {aboutMovie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w200${aboutMovie.poster_path}`}
            alt=""
          />
          <h1>
            {aboutMovie.title ??
              aboutMovie.original_name ??
              aboutMovie.name ??
              aboutMovie.original_title}
          </h1>
          <p>User Score: {Math.ceil(aboutMovie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{aboutMovie.overview ?? 'No overview available'}</p>
          <h2>Genres</h2>
          <ul>
            {aboutMovie.genres ? (
              aboutMovie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })
            ) : (
              <li>No genres available</li>
            )}
          </ul>
        </>
      )}

      <ul>
        <li>
          <NavLink to={`/Movie/${params.movieId}/Cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/Movie/${params.movieId}/Reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}
