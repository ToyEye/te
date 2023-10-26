import { getMovieCredits } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorCard,
  ActorContainer,
  ActorImage,
  ActorInfoContainer,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

// import defaultPic from 'download.jpg';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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

        // console.log(infoCast);

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
    <ActorCard>
      {aboutCasts.length !== 0 ? (
        aboutCasts.map(({ id, profile_path, name, character }) => {
          // const imageUrl = profile_path
          //   ? `https://image.tmdb.org/t/p/w200${profile_path}`
          //   : defaultPic;

          return (
            <ActorContainer key={id}>
              <ActorImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <ActorInfoContainer>
                <ActorName>{name}</ActorName>
                <ActorCharacter>Character: {character}</ActorCharacter>
              </ActorInfoContainer>
            </ActorContainer>
          );
        })
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </ActorCard>
  );
}
