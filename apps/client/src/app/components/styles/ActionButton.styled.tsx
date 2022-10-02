import Button from '../common/Button/Button';
import styled from 'styled-components';

export const StyledActionButton = styled(Button)`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: #ececec;
  }
`;
