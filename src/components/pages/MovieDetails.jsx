import { getMovieDetails } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
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
} from './MovieDetails.styled';

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
      <LinkBtnBack>Back</LinkBtnBack>
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
      <div>
        <AdditionalInfo>Additional informtaion</AdditionalInfo>
        <ul>
          <li>
            <NavLink to={`/Movie/${params.movieId}/Cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/Movie/${params.movieId}/Reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
