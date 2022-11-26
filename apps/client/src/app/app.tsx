import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './pages/Register/Register';
import Layout from './shared/components/layout/Layout/Layout';
import RequireAuth from './shared/components/RequireAuth';
import useAuth from './shared/hooks/useAuth';
import NavBar from './shared/components/layout/NavBar/NavBar';
import Footer from './shared/components/layout/Footer/Footer';
import { useAppDispatch } from './shared/hooks/store/useAppDispatch';
import { IUser } from '@types';
import { loadUser } from './features/User/userSlice';

export const App = () => {

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      const foundUser:IUser = JSON.parse(loggedInUser);
      dispatch(loadUser(foundUser));
    }
  }, []);

  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();

  return (
      <BrowserRouter>
        {isAuthenticated && <NavBar/>}
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
            </Route>

            {/* catch rest*/}

          </Route>
        </Routes>
        {isAuthenticated && <Footer/>}
      </BrowserRouter>
  );
};

export default App;
