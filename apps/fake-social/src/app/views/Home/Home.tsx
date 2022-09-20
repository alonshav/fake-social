import NavBar from "../../components/layout/NavBar/NavBar";
import Feed from "../../components/layout/Feed/Feed";
import SideBar from "../../components/layout/SideBar/SideBar";
import Footer from "../../components/layout/Footer/Footer";
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar/>
      <Feed/>
      <SideBar/>
      <Footer/>
    </div>
  )
    ;
};

export default Home;
