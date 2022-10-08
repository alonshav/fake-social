import styled from 'styled-components';

export const SideBarCardStyled = styled.li`
  padding: 15px;
  margin-top: 7px;
  min-height: 300px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lines.light};

  h4{
    padding: 0;
    margin: 0;
  }
`
