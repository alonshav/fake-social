
import React from 'react';
import Feed from '../Feed/Feed';
import { MainContainerStyled } from '../../styles/MainContainer.styled';

function Main() {
  return (
    <MainContainerStyled>
      <Feed/>
    </MainContainerStyled>
  );
}

export default Main;
