import React, { useEffect, useRef, useState } from 'react';
import { IUser, LoadingStatus } from '@types';
import { StyledLoginStyled } from '../../styles/StyledLogin.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginButton } from '../../styles/Buttons/LoginButton';
import axios from 'axios';
import { useAppDispatch } from '../../hooks/store/useAppDispatch';
import { loadUser } from '../../features/User/userSlice';
import useAuth from '../../hooks/useAuth';

function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef(null);

  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingState, setLoadingState] = useState(LoadingStatus.idle);


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {isAuthenticated} = useAuth();
  const dispatch = useAppDispatch();



  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
    userRef.current?.focus();
  }, [isAuthenticated]);

  useEffect(() => {
    setErrorMessage('');
  }, [nickName, password]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingState(LoadingStatus.loading);
    try {
      const res = await axios.post('http://localhost:3333/api/auth/login',
        {
          username: nickName,
          password
        }, { withCredentials: true });
      if (res.status === 200) {
        setLoadingState(LoadingStatus.succeeded);
        const user:IUser = res.data;
        dispatch(loadUser(user));
        localStorage.setItem('currentUser', JSON.stringify(user))
        navigate(from, { replace: true });
      }
    } catch (e) {
      setErrorMessage(`${e}`);
      navigate('/login');
    }
  };

  return (
    <StyledLoginStyled>
      <section className='login-section'>
        {errorMessage && <p ref={errRef} className={errorMessage ? 'errMsg' : 'offscreen'}
                            aria-live='assertive'>
          {errorMessage}</p>}
        <h1>Fake Social</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='username'>Nickname</label>
          <input
            className='input'
            type='text'
            id='username'
            ref={userRef}
            autoComplete={'off'}
            onChange={(e) => setNickName(e.target.value)}
            value={nickName}
            required
          />
          <label className='input-label' htmlFor={'password'}>Password</label>
          <input
            className='input'
            type={'password'}
            id={'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <LoginButton type='submit' className='sign-in'><h3>Sign In</h3></LoginButton>
        </form>
        <p className='new-account'>
          New to Fake Social?
          <span>
      <Link to={`/register`}>Create an account</Link>
        </span>
        </p>
      </section>
    </StyledLoginStyled>
  );
}

export default Login;
