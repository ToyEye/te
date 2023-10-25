import { Outlet } from 'react-router-dom';
import { HeaderLink, ListUlHeader, Header } from './HeaderLayout.styled';

const HeaderLayout = () => {
  // const { movieId } = useParams();

  return (
    <>
      <Header>
        <nav>
          <ListUlHeader>
            <li>
              <HeaderLink to="/" className="nav-link">
                Home
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/Movie" className="nav-link">
                Movie
              </HeaderLink>
            </li>
          </ListUlHeader>
        </nav>
      </Header>

      <Outlet />
    </>
  );
};

export { HeaderLayout };
