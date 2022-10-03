import NavBar from '../../layout/NavBar/NavBar';
import Feed from '../../features/Feed/Feed';
import Footer from '../../layout/Footer/Footer';
import { HomeGridContainer } from '../../styles/HomeGridContainer.styled';
import React from 'react';
import LeftSideBar from '../../layout/SideBar/LeftSideBar';
import RightSideBar from '../../layout/SideBar/RightSideBar';

const Home = () => {
  return (
    <>
      <HomeGridContainer>
        <LeftSideBar/>
          <Feed />
        <RightSideBar/>
      </HomeGridContainer>
      <Footer />
    </>
);
};

export default Home;
