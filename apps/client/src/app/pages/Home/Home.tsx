import NavBar from '../../components/layout/NavBar/NavBar';
import Feed from '../../components/layout/Feed/Feed';
import Footer from '../../components/layout/Footer/Footer';
import { HomeGridContainer } from '../../styles/HomeGridContainer.styled';
import React from 'react';
import LeftSideBar from '../../components/layout/SideBar/LeftSideBar';
import RightSideBar from '../../components/layout/SideBar/RightSideBar';

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
