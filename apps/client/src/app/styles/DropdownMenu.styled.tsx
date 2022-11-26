import styled from 'styled-components';

export const StyledDropdownMenu = styled.div`
  & {
    background-color: ${({ theme }) => theme.background.navbar};
    position: absolute;
    top: 75px;
    width: 300px;
    transform: translateX(-47%);
    border: 1px solid ${({ theme }) => theme.lines.light};
    border-radius: 10px 0 10px 10px;
    padding: 1rem;
    box-shadow: 0px 0px 5px 2px rgba(136, 136, 136, 0.11);;
  }
`
