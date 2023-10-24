import { getTrending } from 'helpers/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  const fetchData = async () => {
    try {
      const trend = await getTrending();

      setTrendMovies(trend.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!trendMovies) {
      return;
    }

    fetchData();
  }, [trendMovies]);

  return (
    <div>
      <ul>
        <h2 style={{ marginLeft: '10px' }}>Trending today</h2>
        {trendMovies.map(
          ({ id, title, overview, original_title, original_name, name }) => {
            const displayTitle =
              title || original_title || name || original_name;
            return (
              <Link key={id} to={`/Movie/${id}`}>
                <li
                  key={id}
                  style={{ marginLeft: '40px', listStyleType: 'disc' }}
                >
                  {displayTitle}
                </li>
              </Link>
            );
          }
        )}
      </ul>
    </div>
  );
}
