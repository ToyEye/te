import { Route, Routes } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import NotFoundPage from './pages/NotFoundPage';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Toaster } from 'react-hot-toast';

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
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="Movie" element={<Movies />} />
          <Route path="Movie/:movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
