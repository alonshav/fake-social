import { LeftSideBarMenu } from './sideBar.config';
import SideBarCard from '../../common/SideBarCard/SideBarCard';
import React from 'react';
import { LeftSideBarStyled } from '../../../styles/LeftSideBar.styled';

function LeftSideBar() {
  return (
    <LeftSideBarStyled>
        {LeftSideBarMenu.map((card) => <SideBarCard sideBarCard={card} key={card.title} />)}
    </LeftSideBarStyled>
  );
}

export default LeftSideBar;

