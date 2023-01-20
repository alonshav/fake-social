import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <main className='app'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </main>
  );
}

export default Layout;
