import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './pages/Register/Register';
import Layout from './layout/Layout/Layout';
import RequireAuth from './shared/services/Auth/RequireAuth';
import useAuth from './shared/services/Auth/useAuth';
import NavBar from './layout/NavBar/NavBar';
import Footer from './layout/Footer/Footer';
import GlobalStyles from './styles/global/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/useAppSelector';
import { selectCurrentTheme } from './store/layout.slice';
import UserProfile from './pages/UserProfile/UserProfile';
import { loadUser } from './store/auth.slice';
import { useAppDispatch } from './store/useAppDispatch';
import { is } from 'date-fns/locale';

export const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  const theme = useAppSelector(selectCurrentTheme);
  const { isAuthenticated } = useAuth();


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        {isAuthenticated && <NavBar />}
        <Routes>
          <Route path='/' element={<Layout />}>

            {/* public routes*/}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* protected routes*/}
            <Route element={<RequireAuth />}>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/posts'>
                <Route path=':postId' element={<SinglePost />} />
              </Route>
              <Route path='/users'>
                <Route path=':userId' element={<UserProfile />} />
              </Route>
            </Route>

            {/* catch rest*/}

          </Route>
        </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
