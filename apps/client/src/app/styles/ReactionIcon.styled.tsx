import styled from 'styled-components';

interface Props {
  type: string;
}

export const StyledReactionIcon = styled.i<Props>`
  height: 23px;
  width: 23px;
  padding: 3px;
  font-size: 15px   ;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, type }) =>
  theme.color.reactions[type] ? theme.color.reactions[type] : 'white'};
  background-color: ${({ theme, type }) =>
  theme.background.reactions[type] ? theme.background.reactions[type] : 'black'};
`;
