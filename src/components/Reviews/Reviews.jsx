import { getMovieReviews } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentContainer, CommentText, CommentAuthor } from './Reviews.styled';

export default function Reviews() {
  const [aboutReviews, setAboutReviews] = useState([]);
  const params = useParams();

  // console.log(aboutReviews);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const totalRev = await getMovieReviews(1, params.movieId);
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
      {aboutReviews.length !== 0 ? (
        aboutReviews.map(({ id, content, author }) => {
          return (
            <CommentContainer key={id}>
              <CommentAuthor>{author}:</CommentAuthor>
              <CommentText
                dangerouslySetInnerHTML={{ __html: content }}
              ></CommentText>
            </CommentContainer>
          );
        })
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
}
