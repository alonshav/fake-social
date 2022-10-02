import { StyledNavBar } from '../../styles/NavBar.styled';
import NavButtons from './NavButtons';
import SearchBar from '../../common/SearchBar/SearchBar';

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>Fake Social</h1>
      <SearchBar/>
      <NavButtons/>
    </StyledNavBar>
  );
};

export default NavBar;





