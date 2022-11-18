import SideBar from './SideBar';
import { RightSideBarMenu } from './sideBar.config';
import SideBarCard from '../../common/SideBarCard/SideBarCard';
import React from 'react';
import { RightSideBarStyled } from '../../../styles/RightSideBar.styled';

function RightSideBar() {
  return (
    <RightSideBarStyled>
        {RightSideBarMenu.map((card) => <SideBarCard sideBarCard={card} key={card.title}/>)}
    </RightSideBarStyled>
  );
}

export default RightSideBar;
