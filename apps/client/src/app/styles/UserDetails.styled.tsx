import styled from 'styled-components';
import { FlexContainer } from './Containers/FlexContainer';

export const StyledAuthorDetails = styled(FlexContainer)`
  align-items: flex-start;
  flex: 1;

  .user-name {
    margin: 0 0 1px 0;
    &:hover {
      color: ${({ theme }) => theme.color['link-highlight']};
    }
  }
;

  .user-moto {
    font-weight: 300;
    margin: 0 0 1px 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary}
  }
`;
