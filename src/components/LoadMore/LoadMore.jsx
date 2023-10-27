import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ handleLoadMore }) => {
  return (
    <BtnLoadMore onClick={handleLoadMore} type="button">
      Load More
    </BtnLoadMore>
  );
};

export { ButtonLoadMore };
