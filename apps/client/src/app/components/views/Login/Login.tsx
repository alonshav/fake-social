import React, { useEffect, useRef, useState } from 'react';
import { LoadingStatus } from '@types';

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

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <section>
      <p ref={errRef} className={errorMessage ? 'errMsg' : 'offscreen'}
         aria-live='assertive'>
        {errorMessage}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type="text"
          id='username'
          ref={userRef}
          autoComplete={"off"}
          onChange={(e)=>setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor={'password'}>Password:</label>
        <input
          type={'password'}
          id={"password"}
          onChange={(e)=>setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type={'submit'}>Sign In</button>
      </form>
      <p>
        Need an Account?<br/>
        <span>
          <a>Sign Up</a>
        </span>
      </p>
    </section>
  );
}

export default Login;
