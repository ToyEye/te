import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;
  column-gap: 16px;
  width: 1314px;
  margin: 0 auto;
  margin-top: 25px;
`;

export const LinkMy = styled(Link)`
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
