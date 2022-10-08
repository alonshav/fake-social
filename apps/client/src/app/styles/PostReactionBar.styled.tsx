import styled from 'styled-components';
import { FlexContainer } from './Containers/FlexContainer';

export const StyledPostReactionBar = styled(FlexContainer)`
  flex-direction: row;
  margin: 1rem 0 0.5rem;

  .reaction {
    display: flex;
    flex-direction: row;

    .icon {
      font-size: 20px;
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.color.liked};
      font-variation-settings:
        'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48
    }

    .reaction-count {
      font-size: 14px;
      font-weight: 500;
      padding-right: 2px;
    }
  }
`;
