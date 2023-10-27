import { getDetailPerson } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Person = () => {
  const [details, setDetails] = useState([]);
  console.log(details);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchPersonInfo = async () => {
      try {
        const detailsPers = await getDetailPerson(2144);

        setDetails(detailsPers);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchPersonInfo();
  }, []);

  return (
    <div>
      {/* <h2>Tobin Bell</h2>
      <img
        src="http://www.officialtobinbell.com/q21uuCtTioIVcGc3a1Q0DpdcNMO.jpg"
        alt="Tobin Bell"
      />
      <h3>Biography</h3>
      <p>
        Joseph Henry Tobin Jr. (born August 7, 1942), known professionally as
        Tobin Bell, is an American actor and producer. He has appeared in a
        number of television shows and films, but is most recognized for his
        role as John Kramer / Jigsaw in the Saw films franchise.
      </p>
      <h2>Personal Information</h2>
      <ul>
        <li>
          <strong>Also Known As:</strong>
          <ul>
            <li>Joseph H. Tobin, Jr.</li>
            <li>Тобин Белл</li>
            <li>토빈 벨</li>
            <li>托宾·贝尔</li>
          </ul>
        </li>
        <li>
          <strong>Birthday:</strong> August 7, 1942
        </li>
        <li>
          <strong>Gender:</strong> Male
        </li>
        <li>
          <strong>Place of Birth:</strong> Queens, New York City, New York, USA
        </li>
        <li>
          <strong>Known for Department:</strong> Acting
        </li>
      </ul> */}
    </div>
  );
};

export { Person };
