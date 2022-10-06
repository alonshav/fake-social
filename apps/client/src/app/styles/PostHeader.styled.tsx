import styled from 'styled-components';
import { CardHeader } from './CardHeader';

export const PostHeader = styled(CardHeader)`
  .followButton {
    &:hover {
      color: ${({ theme }) => theme.color['link-highlight']};
    }

    padding: 5px;
    font-size: 16px
  }

  .postDetails {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    }
`
