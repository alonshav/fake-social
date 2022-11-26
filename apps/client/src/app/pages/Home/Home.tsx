import NavBar from '../../shared/components/layout/NavBar/NavBar';
import Feed from '../../shared/components/layout/Feed/Feed';
import Footer from '../../shared/components/layout/Footer/Footer';
import { HomeGridContainer } from '../../styles/HomeGridContainer.styled';
import React from 'react';
import LeftSideBar from '../../shared/components/layout/SideBar/LeftSideBar';
import RightSideBar from '../../shared/components/layout/SideBar/RightSideBar';

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
