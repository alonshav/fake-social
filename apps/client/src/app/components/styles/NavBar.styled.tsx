import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  grid-area: 1 / 1 / 1 / 3;
  top: 0;
  position: sticky;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.navbar};
  padding: 5px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #EBEBEB;

  h1 {
    font-family: Bangers;
    font-size: 42px;
    color: #333333;
  }
`;





