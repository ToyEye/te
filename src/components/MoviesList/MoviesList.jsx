import { LinkMy, ListUl } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MovieList({ trendMovies }) {
  const location = useLocation();
  console.log(location);

  return (
    <ListUl>
      {trendMovies &&
        trendMovies.map(
          ({ id, title, original_title, original_name, name, poster_path }) => {
            const displayTitle =
              title || original_title || name || original_name;
            return (
              <li key={id}>
                <LinkMy key={id} to={`/Movie/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200${poster_path}`
                        : defaultImg
                    }
                    alt={displayTitle}
                  />
                  {displayTitle}
                </LinkMy>
              </li>
            );
          }
        )}
    </ListUl>
  );
}
