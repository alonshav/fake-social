import React, { useEffect, useRef, useState } from 'react';
import { LoadingStatus } from '@types';
import { StyledLoginStyled } from '../../styles/StyledLogin.styled';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingState, setLoadingState] = useState(LoadingStatus.idle);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [user, pwd]);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('e:', e);
    e.preventDefault();
    navigate('/home');
  }

  return (
    <StyledLoginStyled>
      <section className='login-section'>
        {errorMessage && <p ref={errRef} className={errorMessage ? 'errMsg' : 'offscreen'}
            aria-live='assertive'>
          {errorMessage}</p>}
        <h1>Fake Social</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            className='input'
            type='text'
            id='username'
            ref={userRef}
            autoComplete={'off'}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label className='input-label' htmlFor={'password'}>Password</label>
          <input
            className='input'
            type={'password'}
            id={'password'}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <Button type='submit' className='sign-in'><h3>Sign In</h3></Button>
        </form>
        <p className='new-account'>
          New to Fake Social?
          <span>
          <a>Create an account</a>
        </span>
        </p>
      </section>
    </StyledLoginStyled>
  );
}

export default Login;
