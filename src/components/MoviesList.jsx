import { Link } from 'react-router-dom';

export default function MovieList({ trendMovies }) {
  return (
    <ul>
      {trendMovies &&
        trendMovies.map(
          ({ id, title, overview, original_title, original_name, name }) => {
            const displayTitle =
              title || original_title || name || original_name;
            return (
              <li
                key={id}
                style={{ marginLeft: '40px', listStyleType: 'disc' }}
              >
                <Link key={id} to={`/Movie/${id}`}>
                  {displayTitle}
                </Link>
              </li>
            );
          }
        )}
    </ul>
  );
}
