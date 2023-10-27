import { getDetailPerson } from 'helpers/API';

const Person = () => {
  const [,] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trend = await getTrending(page);

        setTrendMovies(prevTrend => {
          if (page === 1) {
            return [...trend.results];
          }
          return [...prevTrend, ...trend.results];
        });
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h2>Tobin Bell</h2>
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
      </ul>
    </div>
  );
};

export { Person };
