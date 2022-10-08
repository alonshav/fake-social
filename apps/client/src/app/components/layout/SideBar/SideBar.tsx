import React from 'react';
import { SideBarStyled } from '../../../styles/SideBar.styled';

interface Props {
  children:React.ReactNode
}
const SideBar = ({children}:Props) => {
  return (
    <SideBarStyled>
      {children}
    </SideBarStyled>
  )
}

export default SideBar
