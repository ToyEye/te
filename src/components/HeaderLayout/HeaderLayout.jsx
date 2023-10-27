import { Outlet } from 'react-router-dom';
import { HeaderLink, ListUlHeader, Header } from './HeaderLayout.styled';
import { Suspense } from 'react';

export default function HeaderLayout() {
  return (
    <>
      <Header>
        <nav>
          <ListUlHeader>
            <li>
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/Movie">Movie</HeaderLink>
            </li>
          </ListUlHeader>
        </nav>
      </Header>
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </>
  );
}
