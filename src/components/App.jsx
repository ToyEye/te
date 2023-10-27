import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';

// PAGES
const Home = lazy(() => import('./pages/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Genre = lazy(() => import('./pages/Genre'));
const HeaderLayout = lazy(() => import('./HeaderLayout/HeaderLayout'));
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
      <Suspense fallback={'LOADING PAGE...'}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="Movie" element={<Movies />} />
            <Route path="Genre" element={<Genre />} />
            <Route path="Movie/:movieId" element={<MovieDetails />}>
              <Route path="Cast" element={<Cast />} />
              <Route path="Reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
          }}
        />
      </Suspense>
    </>
  );
};
