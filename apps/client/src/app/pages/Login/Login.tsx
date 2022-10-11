import React, { useEffect, useRef, useState } from 'react';
import { LoadingStatus } from '@types';
import { StyledLoginStyled } from '../../styles/StyledLogin.styled';
import { Link, useNavigate } from 'react-router-dom';
import { LoginButton } from '../../styles/Buttons/LoginButton';
import axios from 'axios';

function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingState, setLoadingState] = useState(LoadingStatus.idle);


  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('password:', password);
    console.log('username:', username);
    const res = await axios.post('http://localhost:3333/api/auth/login', {
      username,
      password
    },{ withCredentials: true});
    console.log('res:', res);
    if (res.status === 200) {
      navigate('/home');
    }
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
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
      <Link to={`register`}>Create an account</Link>
        </span>
        </p>
      </section>
    </StyledLoginStyled>
  );
}

export default Login;

