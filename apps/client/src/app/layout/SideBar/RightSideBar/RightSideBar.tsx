import { RightSideBarMenu } from '../sideBar.config';
import React from 'react';
import { RightSideBarStyled } from '../../../styles/RightSideBar.styled';
import SideBarCard from '../SideBarCard/SideBarCard';

function RightSideBar() {
  return (
    <RightSideBarStyled>
        {RightSideBarMenu.map((card) => <SideBarCard card={card} key={card.title}/>)}
    </RightSideBarStyled>
  );
}

export default RightSideBar;
