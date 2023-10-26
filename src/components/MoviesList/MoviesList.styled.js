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
  /* background-color: blue; */
`;

const listItem = styled.li``;

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
`;

export { ContainerListMovie, ListUl, ContainerPosterImg, PosterMovie, LinkMy };
