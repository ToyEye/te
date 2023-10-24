import { NavLink, Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Cast from './Cast';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import NotFountPage from './pages/NotFountPage';
import Reviews from './Reviews';

// // STYLED
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Movie" className="nav-link">
                Movie
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movie" element={<Movies />}></Route>
        <Route path="/Movie/:movieId" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />}></Route>
          <Route path="Reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<NotFountPage />}></Route>
      </Routes>
    </div>
  );
};
