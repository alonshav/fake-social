import styled from 'styled-components';
import { StyledButton } from '../Button.styled';

export const StyledNavButton = styled(StyledButton)`

  .icon {
    fill: gray;
    margin-bottom: 3px;
  }
  .icon-text {
    color: gray
  }

  &:hover {
    .icon {
      fill: ${({ theme }) => theme.color['primary']}
    }
    .icon-text {
      color: ${({ theme }) => theme.color['primary']}
    }
  }
`;
