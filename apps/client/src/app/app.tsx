import Home from './components/views/Home/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/global/GlobalStyles';
import { lightMode } from './components/styles/global/GlobalThemes';
import Login from './components/views/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import React from 'react';

export const App = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyles />
      <Router>
        <NavBar isLoggedIn={true}/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
