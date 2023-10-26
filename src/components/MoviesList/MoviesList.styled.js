import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerListMovie = styled.div`
  display: flex;
`;

const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;
  column-gap: 16px;
  width: 1314px;
  margin: 0 auto;
  margin-top: 25px;
`;

const listItem = styled.li`
  background-color: blue;
`;

const ContainerPosterImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PosterMovie = styled.img`
  display: block;
  width: 250px;
`;

const LinkMy = styled(Link)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  padding: 12px;
  width: 250px;
  height: 406px;
  border-radius: 8px;
  border: solid 1px orange;

  text-decoration: none;
  color: black;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

export {
  ContainerListMovie,
  ListUl,
  listItem,
  ContainerPosterImg,
  PosterMovie,
  LinkMy,
};
