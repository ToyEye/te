import { getDetailPerson } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Person = () => {
  const [details, setDetails] = useState([]);
  console.log(details);
  const params = useParams();
  const idPerson = params.PersonId;

  useEffect(() => {
    const fetchPersonInfo = async () => {
      try {
        const detailsPers = await getDetailPerson(idPerson);

        setDetails(detailsPers);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchPersonInfo();
  }, [idPerson, details]);
  const {
    id,
    biography,
    also_known_as,
    birthday,
    deathday,
    gender,
    known_for_department,
    name,
    place_of_birth,
    profile_path,
  } = details;

  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
      <h3>Biography</h3>
      <p>{biography}</p>
      <h3>Personal Information</h3>
      <h4>Also Known As: </h4>
      <ul>
        {also_known_as.map(known => {
          return <li>{known}</li>;
        })}
      </ul>
      <ul>
        <li>
          <strong>Birthday:</strong> {birthday}
        </li>
        <li>
          <strong>Gender:</strong> {gender === 2 ? 'Male' : 'Female'}
        </li>
        <li>
          <strong>Place of Birth:</strong> {place_of_birth}
        </li>
        <li>
          <strong>Known for:</strong> {known_for_department}
        </li>
        <li>
          <strong>Deathday:</strong> {deathday}
        </li>
      </ul>
    </div>
  );
};

export { Person };
