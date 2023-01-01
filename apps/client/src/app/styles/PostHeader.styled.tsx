import styled from 'styled-components';
import { CardHeaderStyled } from './CardHeader.styled';

export const PostHeader = styled(CardHeaderStyled)`
  margin-bottom: 10px;

  .followButton {
    &:hover {
      color: ${({ theme }) => theme.color['link-highlight']};
    }

    padding: 5px;
    font-size: 16px;
  }

  .postDetails {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
`;
