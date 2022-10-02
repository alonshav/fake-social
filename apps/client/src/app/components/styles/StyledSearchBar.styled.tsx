import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;


  .search-icon{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    border-radius: 10px 0 0 10px;
    background: #e0e0e0;
    min-height: 40px;
    font-size: 1.5rem;
    padding-left: 5px;
  }
  .searchBar {
    justify-content: flex-start;
    min-width: 400px;
    border: none;
    border-radius: 0 10px 10px 0;
    background: #e0e0e0;
    min-height: 40px;
    font-size: 1rem;
  }
  .searchBar:focus{
    outline:none;
  }
`

