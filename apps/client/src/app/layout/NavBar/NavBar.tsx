import { StyledNavBar } from '../../styles/NavBar.styled';
import NavLinks from './NavLinks';
import SearchBar from '../../components/common/SearchBar/SearchBar';


const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>Fake Social</h1>
      <SearchBar />
      <NavLinks />
    </StyledNavBar>
  );
};

export default NavBar;





