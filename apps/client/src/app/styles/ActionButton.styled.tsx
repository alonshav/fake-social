import styled from 'styled-components';
import { StyledButton } from './Button.styled';

export const StyledPostActionBarButton = styled(StyledButton)<{ isClicked: boolean }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 10px;
  border-radius: 20px;

  .icon {
    color: ${({ isClicked }) => isClicked && (({ theme }) => theme.color.liked)};
    font-variation-settings: 'FILL' ${({ isClicked }) => isClicked && 1},
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }


  &:hover {
    background-color: #ececec;
  }
`;
