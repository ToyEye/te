import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkBtnBack = styled(Link)`
  display: inline-block;
  text-align: center;
  white-space: nowrap;

  font-weight: 400;
  text-decoration: none;

  vertical-align: middle;

  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;

  font-size: 1rem;

  line-height: 1.5;

  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: #f7e6d1;
  border-color: #d3b8a7;

  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: #6c4c33;
    text-decoration: none;
    background-color: #ffd9b3;
    border-color: #ffaf5f;
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  column-gap: 16px;
`;

const ImgPoster = styled.img`
  margin-right: 20px;
  max-width: 200px;
  height: auto;
`;

const TitleMovie = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserScore = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const OverView = styled.h2`
  margin-bottom: 10px;
`;
const OverViewParagraph = styled.p`
  width: 500px;
`;

const Genres = styled.h2`
  margin-bottom: 10px;
`;

const GenresList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const GenresListItem = styled.li`
  margin-bottom: 5px;
`;

const AdditionalInfo = styled.h3`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 20px;
  font-weight: bold;
`;

const AdditionalInfoList = styled.ul`
  display: flex;
  margin-top: 25px;

  column-gap: 28px;
`;

const AdditionalNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  transition: color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  text &:hover {
    color: orange;
  }
`;

const AdditionalInfoListItem = styled.li``;

export {
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
};
