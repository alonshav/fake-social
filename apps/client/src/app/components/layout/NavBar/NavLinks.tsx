import React from 'react';
import { NavigationMenu } from './navBar.config';
import { NavButton } from './NavButton';
import { StyledNavButtons } from '../../../styles/NavButtons.styled';
import { StyledNavLink } from '../../../styles/NavLink.styled';

function NavLinks() {
  return (
    <StyledNavButtons>
      {NavigationMenu.map((navItem) => {
        return (
          <StyledNavLink to={navItem.route} key={navItem.title}>
            {({ isActive }) => (
              <NavButton
                item={navItem}
                className={isActive ? 'active' : ''}
              />)}
          </StyledNavLink>
        );
      })}
    </StyledNavButtons>
  );
}

export default NavLinks;
