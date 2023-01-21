import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './pages/Register/Register';
import Layout from './layout/Layout/Layout';
import RequireAuth from './shared/components/RequireAuth';
import GlobalStyles from './styles/global/GlobalStyles.styled';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/useAppSelector';
import { selectCurrentTheme } from './store/layout.slice';
import UserProfile from './pages/UserProfile/UserProfile';
import { useAppDispatch } from './store/useAppDispatch';
import { loadUser } from './store/auth.slice';

export const App = () => {

  const dispatch = useAppDispatch()
  dispatch(loadUser())

  return (
    <ThemeProvider theme={useAppSelector(selectCurrentTheme)}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>

          {/* public routes*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* protected routes*/}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts">
                  <Route path=":postId" element={<SinglePost />} />
                </Route>
                <Route path="/users">
                  <Route path=":userId" element={<UserProfile />} />
                </Route>
              </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
