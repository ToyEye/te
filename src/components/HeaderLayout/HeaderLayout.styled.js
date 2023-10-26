import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px 0;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  margin-bottom: 25px;
`;

export const HeaderLink = styled(NavLink)`
  padding: 20px 0;
  display: block;
  text-decoration: none;
  &:hover {
    color: orange;
    transform: scale(1.1);
  }
`;

export const ListUlHeader = styled.ul`
  display: flex;
  column-gap: 25px;
`;
