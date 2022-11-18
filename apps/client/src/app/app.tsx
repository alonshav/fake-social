import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import Register from './pages/Register/Register';
import Layout from './components/layout/Layout/Layout';
import RequireAuth from './components/common/RequireAuth';
import useAuth from './hooks/useAuth';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import { useAppDispatch } from './hooks/store/useAppDispatch';
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
                <Route path=':postId' element={<SinglePostPage />} />
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
