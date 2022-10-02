import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lines.light};
  margin: 7px;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;
