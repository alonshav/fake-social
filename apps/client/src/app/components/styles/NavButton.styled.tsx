import Button from '../common/Button/Button';
import styled from 'styled-components';

export const StyledNavButton = styled(Button)`

  .icon {
    fill: gray;
    margin-bottom: 3px;
  }
  .icon-text {
    color: gray
  }

  &:hover {
    .icon {
      fill: ${({ theme }) => theme.color['main-black']}
    }
    .icon-text {
      color: ${({ theme }) => theme.color['main-black']}
    }
  }
`;
