import React from 'react';
import { StyledNavLinks } from '../../../styles/NavButtons.styled';
import NavItem from './NavItem';
import { useNavbarMenu } from '../../../hooks/constants/useNavbarMenu';

function NavLinks() {

  const { navigationMenu } = useNavbarMenu();

  return (
    <StyledNavLinks>
      {navigationMenu.map((navItem, index) => <NavItem navItem={navItem} key={navItem.title}/>)}
    </StyledNavLinks>
  );
}

export default NavLinks;
