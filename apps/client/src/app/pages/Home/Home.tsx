import Feed from '../../layout/Feed/Feed';
import { HomeGridContainer } from '../../styles/HomeGridContainer.styled';
import React, { useEffect } from 'react';
import LeftSideBar from '../../layout/SideBar/LeftSideBar/LeftSideBar';
import RightSideBar from '../../layout/SideBar/RightSideBar/RightSideBar';

const Home = () => {

  return (
    <>
      <HomeGridContainer>
        <LeftSideBar/>
          <Feed />
        <RightSideBar/>
      </HomeGridContainer>
    </>
);
};

export default Home;
