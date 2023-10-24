import { getMovieCredits } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import defaultPic from 'download.jpg';

export default function Cast() {
  const [aboutCasts, setAboutCasts] = useState([]);
  const params = useParams();

  // console.log(params.movieId);
  // console.log(aboutCasts);

  useEffect(() => {
    // if (aboutCasts.length === 0) return;

    const fetchMovieCredits = async () => {
      try {
        const infoCast = await getMovieCredits(params.movieId);

        console.log(infoCast);

        setAboutCasts(infoCast.cast);
      } catch (err) {
        console.log(err);
      }
    };

    if (params.movieId) {
      fetchMovieCredits();
    }
    // fetchMovieCredits();
  }, [params.movieId]);

  return (
    <div className="actor-card">
      {aboutCasts.length !== 0 &&
        aboutCasts.map(({ id, profile_path, name, character }) => {
          const imageUrl = profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : defaultPic;

          return (
            <div key={id}>
              <img
                src={imageUrl}
                alt={name}
                className="actor-image"
                style={{ width: '300px' }}
              />
              <div className="actor-details">
                <h3 className="actor-name">{name}</h3>
                <p className="actor-character">Character: {character}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
