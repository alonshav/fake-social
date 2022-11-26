import React, { useEffect, useRef, useState } from 'react';
import { NavButton } from './NavButton';
import { StyledNavLink } from '../../../../styles/NavLink.styled';
import { INavItem } from '../../../hooks/constants/useNavbarMenu';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';

interface NavItemProps {
  navItem: INavItem;
}


function NavItem({ navItem }: NavItemProps) {

  const ref:React.RefObject<HTMLDivElement> = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e:any) => {
      if (isDropdownOpen && ref.current && !ref.current.contains(e.target)) {
        setIsDropdownOpen(false)}};
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isDropdownOpen])

  return (
    <StyledNavLink to={navItem.route} key={navItem.title}>
        <NavButton
          item={navItem}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {(isDropdownOpen && navItem.dropdown) && <DropdownMenu ref={ref} />}
        </NavButton>
    </StyledNavLink>);
}

export default NavItem;
