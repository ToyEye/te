import { getMovieCredits } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ActorCard,
  ActorContainer,
  ActorImage,
  ActorInfoContainer,
  ActorName,
  ActorCharacter,
} from './Cast.styled';
import { PersonModal } from 'components/BackButton/Modal/Modal';

// import defaultPic from 'download.jpg';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function Cast() {
  const [aboutCasts, setAboutCasts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const params = useParams();
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      // setIsError(false);

      try {
        const infoCast = await getMovieCredits(params.movieId);
        setAboutCasts(infoCast.cast);

        // if (infoCast.cast.length === 0) {
        //   setIsError(true);
        // } else {
        //   setAboutCasts(infoCast.cast);
        // }
      } catch (err) {
        console.log(err);
      }
    };

    if (params.movieId) {
      fetchMovieCredits();
    }
  }, [params.movieId]);

  const handleClickImg = persId => {
    console.log(persId);
  };

  return (
    <ActorCard>
      {aboutCasts.map(({ id, profile_path, name, character }) => {
        return (
          <Link
            key={id}
            // to={`/Person/${id}`}
            style={{ textDecoration: 'none' }}
          >
            <ActorContainer onClick={() => handleClickImg(id)} key={id}>
              <ActorImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt={name}
                onClick={() => setShowModal(true)}
              />
              <ActorInfoContainer>
                <ActorName>{name}</ActorName>
                <ActorCharacter>Character: {character}</ActorCharacter>
              </ActorInfoContainer>
            </ActorContainer>
          </Link>
        );
      })}
      {showModal && (
        <PersonModal
          modalIsOpen={showModal}
          closeModal={() => setShowModal(false)}
        ></PersonModal>
      )}
    </ActorCard>
  );
}
