import React from 'react';
import { NavigationMenu } from './navBar.config';
import { NavButton } from './NavButton';
import { StyledNavButtons } from '../../styles/NavButtons.styled';
import { StyledLink } from '../../styles/Link.styled';

function NavButtons() {
  return (
    <StyledNavButtons>
      {NavigationMenu.map((navItem) => {
        return (
          <StyledLink to={navItem.route}>
            <NavButton item={navItem} key={navItem.title} />
          </StyledLink>
        );
      })}
    </StyledNavButtons>
  );
}

export default NavButtons;
