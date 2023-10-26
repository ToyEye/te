import { getMovieDetails } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  LinkBtnBack,
  ContainerInfo,
  ImgPoster,
  TitleMovie,
  UserScore,
  OverView,
  OverViewParagraph,
  Genres,
  GenresList,
  GenresListItem,
  AdditionalInfo,
  AdditionalInfoList,
  AdditionalNavLink,
  AdditionalInfoListItem,
} from './MovieDetails.styled';

import NotFoundPage from './NotFoundPage';

export default function MovieDetails() {
  const [aboutMovie, setAboutMovie] = useState(null);
  const [isNotFound, setIsNotFound] = useState();

  const params = useParams();

  const localLocation = useLocation();

  useEffect(() => {
    if (!params.movieId) {
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const detailInfo = await getMovieDetails(params.movieId);
        setAboutMovie(detailInfo);
      } catch (err) {
        setIsNotFound(true);
      }
    };

    fetchMovieDetails();
  }, [params.movieId]);

  if (isNotFound) {
    return <NotFoundPage />;
  }

  console.log(localLocation);

  return (
    <div style={{ padding: '20px' }}>
      <LinkBtnBack to={localLocation.state}>Back</LinkBtnBack>
      {aboutMovie && (
        <ContainerInfo>
          <ImgPoster
            src={`https://image.tmdb.org/t/p/w200${aboutMovie.poster_path}`}
            alt=""
          />
          <div>
            <TitleMovie>
              {aboutMovie.title ??
                aboutMovie.original_name ??
                aboutMovie.name ??
                aboutMovie.original_title}
            </TitleMovie>
            <UserScore>
              User Score: {Math.ceil(aboutMovie.vote_average * 10)}%
            </UserScore>
            <OverView>Overview</OverView>
            <OverViewParagraph>
              {aboutMovie.overview ?? 'No overview available'}
            </OverViewParagraph>
            <Genres>Genres</Genres>
            <GenresList>
              {aboutMovie.genres ? (
                aboutMovie.genres.map(genre => {
                  return (
                    <GenresListItem key={genre.id}>{genre.name}</GenresListItem>
                  );
                })
              ) : (
                <li>No genres available</li>
              )}
            </GenresList>
          </div>
        </ContainerInfo>
      )}
      <AdditionalInfo>Additional informtaion</AdditionalInfo>
      <div style={{ marginBottom: '20px' }}>
        <AdditionalInfoList>
          <AdditionalInfoListItem>
            <AdditionalNavLink
              to={`/Movie/${params.movieId}/Cast`}
              state={localLocation}
            >
              Cast
            </AdditionalNavLink>
          </AdditionalInfoListItem>
          <AdditionalInfoListItem>
            <AdditionalNavLink
              to={`/Movie/${params.movieId}/Reviews`}
              state={localLocation}
            >
              Reviews
            </AdditionalNavLink>
          </AdditionalInfoListItem>
        </AdditionalInfoList>
      </div>
      <Outlet />
    </div>
  );
}
