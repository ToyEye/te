import styled from 'styled-components';

const ActorCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 16px;
  padding: 20px;
`;

const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActorImage = styled.img`
  display: block;

  width: 250px;
`;

const ActorInfoContainer = styled.div`
  padding: 12px 8px;
`;

const ActorName = styled.h3`
  margin-bottom: 8px;
  text-align: center;
`;

const ActorCharacter = styled.p`
  text-align: center;
`;

export {
  ActorCard,
  ActorContainer,
  ActorImage,
  ActorInfoContainer,
  ActorName,
  ActorCharacter,
};
