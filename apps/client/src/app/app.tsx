import Home from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global/GlobalStyles';
import { lightMode } from './styles/global/GlobalThemes';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import React from 'react';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyles/>
        <Router>
          <NavBar isLoggedIn={true} />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/posts'>
              <Route path=':postId' element={<SinglePostPage/>}/>
            </Route>
          </Routes>
        </Router>
    </ThemeProvider>
  );
};

export default App;
