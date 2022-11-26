import styled from 'styled-components';
import { StyledRoundCornerButton } from './Buttons/StyledRoundCornerButton';

export const StyledPublishAPostButton = styled(StyledRoundCornerButton)`
  color: #676767;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  background-color: transparent;
  height: auto;
  margin: 0;
  padding: 0.5rem;
  font-weight: 300;
  flex: 1;
  &:hover{
    ${({ theme }) => theme.color.highlight}
  }
`

