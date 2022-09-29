import Header from '../../layout/NavBar/NavBar';
import Feed from '../../features/Feed/Feed';
import SideBar from '../../layout/SideBar/SideBar';
import Footer from '../../layout/Footer/Footer';
import { HomeGridContainer } from '../../styles/HomeGridContainer.styled';

const Home = () => {
  return (
    <HomeGridContainer>
      <Feed />
      <Header />
      <SideBar />
      <Footer />
    </HomeGridContainer>
  );
};

export default Home;
