import React from 'react';
import { StyledActionBar } from '../../styles/ActionBar.styled';
import { ActionBarItems } from './actionBar.config';
import { ActionBarButton } from './ActionBarButton';

function ActionBar() {
  return (
    <StyledActionBar>
      {ActionBarItems.map((item)=>(<ActionBarButton item={item} key={item.title}/>))}
    </StyledActionBar>
  );
}

export default ActionBar;
