import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  background: transparent;

  .active {
    text-decoration: underline;
  }
`;
