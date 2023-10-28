import { getTVCreditsPerson } from 'helpers/API';
import { useEffect, useState } from 'react';

const DetailsCreditsPerson = ({ personId }) => {
  const [tVCredits, setTVCredits] = useState([]);

  useEffect(() => {
    const fetchTVCreditsPerson = async () => {
      try {
        const detailsPers = await getTVCreditsPerson(personId);

        setTVCredits(detailsPers.cast);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTVCreditsPerson();
  }, [personId]);
  return (
    <>
      <h2>Know for</h2>

      {tVCredits.map(
        ({
          id,
          name,
          original_name,
          overview,
          first_air_date,
          vote_average,
          vote_count,
          character,
          poster_path,
        }) => {
          return (
            <div ket={id}>
              <h2>{name}</h2>
              <p>Original Name: {original_name}</p>
              <p>Overview: {overview}</p>
              <p>First Air Date: {first_air_date}</p>
              <p>Vote Average: {vote_average}</p>
              <p>Vote Count: {vote_count}</p>
              <p>Character: {character}</p>
              <img
                style={{ width: '100px' }}
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={name}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export { DetailsCreditsPerson };
