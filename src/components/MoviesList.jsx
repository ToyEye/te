import { LinkMy, ListUl } from './MoviesList.styled';

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
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
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
