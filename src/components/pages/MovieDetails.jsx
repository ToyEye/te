import { getMovieDetails } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [aboutMovie, setAboutMovie] = useState(null);
  const { movieId } = useParams();
  console.log(aboutMovie);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailInfo = await getMovieDetails(movieId);
        setAboutMovie(detailInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {/* <h1>{aboutMovie.original_title}</h1> */}
      <p>User Score: 75%</p>
      <h2>Overview</h2>
      {/* <p>{aboutMovie.overview}</p> */}
      <h2>Genres</h2>
      <ul>
        {/* {aboutMovie.genres.map(genre => {
          return (
            <>
              <li key={genre.id}>{genre.name}</li>
            </>
          );
        })} */}
      </ul>
    </div>
  );
};

export default MovieDetails;
