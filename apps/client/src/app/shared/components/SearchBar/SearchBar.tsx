import React from 'react';
import { StyledSearchBar } from '../../../styles/SearchBar.styled';

function SearchBar() {
  return (
    <StyledSearchBar>
      <span className='material-symbols-outlined search-icon'>search</span>
      <input className='searchBar' type='text' placeholder='Search' />
    </StyledSearchBar>
  );
}

export default SearchBar;
