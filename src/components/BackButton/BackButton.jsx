import { LinkBtnBack } from 'components/pages/MovieDetails.styled';

export const ButtonToBack = ({ location }) => {
  return <LinkBtnBack to={location}>Back</LinkBtnBack>;
};
