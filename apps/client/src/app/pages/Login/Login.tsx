import React, { useEffect, useRef, useState } from 'react';
import { StyledLoginStyled } from '../../styles/Login.styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledLoginButton } from '../../styles/Buttons/StyledLoginButton.styled';
import { useAppDispatch } from '../../store/useAppDispatch';
import { login, selectIsAuthenticated, selectLoginStatus } from '../../store/auth.slice';
import { useAppSelector } from '../../store/useAppSelector';

function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef(null);

  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(selectLoginStatus);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
    userRef.current?.focus();
  }, [isAuthenticated]);

  useEffect(() => {
    setErrorMessage('');
  }, [nickname, password]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(login({ nickname, password }));
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
            value={nickname}
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
          <StyledLoginButton type='submit' className='sign-in'><h3>Sign In</h3></StyledLoginButton>
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
