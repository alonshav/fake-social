import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  grid-area: 1 / 1 / 1 / 4;
  top: 0;
  position: sticky;
  display: flex;
  z-index: 1;
  width: 100%;
  max-height: 70px;
  background-color: ${({ theme }) => theme.background.navbar};
  padding: 5px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.lines.light};

  h1 {
    font-family: Bangers;
    font-size: 42px;
    color: #333333;
  }
`;





