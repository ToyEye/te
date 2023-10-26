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

  border-radius: 5%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ActorInfoContainer = styled.div`
  padding: 12px 8px;
`;

const ActorName = styled.h3`
  margin-bottom: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const ActorCharacter = styled.p`
  text-align: center;
  font-size: 14px;
  color: #888;
`;

export {
  ActorCard,
  ActorContainer,
  ActorImage,
  ActorInfoContainer,
  ActorName,
  ActorCharacter,
};
