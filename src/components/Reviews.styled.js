import styled from 'styled-components';

const CommentContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
`;

const CommentText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
`;

export { CommentContainer, CommentText, CommentAuthor };
