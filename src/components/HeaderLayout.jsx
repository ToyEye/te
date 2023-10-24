import { NavLink, Outlet } from 'react-router-dom';

const HeaderLayout = () => {
  return (
    <>
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

      <Outlet />
    </>
  );
};

export { HeaderLayout };
