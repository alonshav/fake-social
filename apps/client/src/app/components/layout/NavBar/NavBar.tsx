import { StyledNavBar } from '../../../styles/NavBar.styled';
import NavLinks from './NavLinks';
import SearchBar from '../../common/SearchBar/SearchBar';

interface NavBarProps {
  isLoggedIn: boolean;
}

const NavBar = ({ isLoggedIn }: NavBarProps) => {
  return (isLoggedIn
    ? (
      <StyledNavBar>
        <h1>Fake Social</h1>
        <SearchBar />
        <NavLinks />
      </StyledNavBar>
    )
    : null)
};

export default NavBar;





