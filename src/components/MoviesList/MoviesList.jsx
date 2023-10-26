import { LinkMy, ListUl } from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MovieList({ trendMovies }) {
  return (
    <ListUl>
      {trendMovies &&
        trendMovies.map(
          ({
            id,
            title,
            overview,
            original_title,
            original_name,
            name,
            poster_path,
          }) => {
            const displayTitle =
              title || original_title || name || original_name;
            return (
              <li key={id}>
                <LinkMy key={id} to={`/Movie/${id}`}>
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
