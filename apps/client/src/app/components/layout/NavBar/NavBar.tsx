import { NavigationMenu } from './navBar.config';
import { NavButton } from './NavButton';
import { StyledNavBar } from '../../styles/NavBar.styled';
import { NavButtons } from '../../styles/NavButtons.styled';

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>Fake Social</h1>
      <NavButtons>
        {NavigationMenu.map((navItem) => <NavButton navItem={navItem} key={navItem.title}/>)}
      </NavButtons>
    </StyledNavBar>
  );
};

export default NavBar;





