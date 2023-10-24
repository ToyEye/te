import { getMovieReviews } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [aboutReviews, setAboutReviews] = useState([]);
  const params = useParams();
  console.log(aboutReviews);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const totalRev = await getMovieReviews(params.movieId);
        setAboutReviews(totalRev.results);
      } catch (err) {
        console.log(err);
      }
    };

    if (params.movieId) {
      fetchMovieReviews();
    }
  }, [params.movieId]);

  return (
    <div>
      {aboutReviews.length !== 0 &&
        aboutReviews.map(({ content, author }) => {
          return (
            <>
              <div className="movie-review">
                <p className="review-author">
                  <b>Author: {author}</b>
                </p>
                <p className="review-content">
                  dangerouslySetInnerHTML={{ __html: content }}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
}
