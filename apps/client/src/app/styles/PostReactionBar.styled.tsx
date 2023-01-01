import styled from 'styled-components';
import { FlexContainer } from './Containers/FlexContainer';

export const StyledPostReactionBar = styled(FlexContainer)`
  flex-direction: row;
  margin: 1rem 0 0.5rem;

  .reaction {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -5px;
  }
  .reaction-count {
    margin-left: 6px;
    font-size: 14px;
    font-weight: 400;
  }
`;
