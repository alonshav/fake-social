import React, { ChangeEvent, useState } from 'react';
import { StyledRegisterationForm } from '../../styles/RegistrationForm.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() { //Todo: change to useReducer

  const [nickname, setNickName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'nickname') {
      setNickName(value);
    }
    if (id === 'firstname') {
      setFirstName(value);
    }
    if (id === 'lastname') {
      setLastName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registrationData = {
      nickname,
      firstname,
      lastname,
      email,
      password
    };

    try {
      const res = await axios.post('http://localhost:3333/api/v1/auth/register', registrationData);
      console.log('res:', res);
      if (res.status === 201) {
        navigate('/login');
      }
    } catch (e) {
      setErrorMessage(`${e}`);
    }
  };

  return (
    <StyledRegisterationForm className='registration-form'
                             onSubmit={handleSubmit}> {/*Todo: Change to Generic Form Component*/}
      <div className='form-body'>
        <div className='nickname'>
          <label className='form__label' htmlFor='nickname'>Nickname </label>
          <input className='form__input' type='text' value={nickname} onChange={(e) => handleInputChange(e)}
                 id='nickname' placeholder='Nickname' required />
        </div>
        <div className='firstname'>
          <label className='form__label' htmlFor='firstname'>First Name </label>
          <input type='text' name='' id='firstname' value={firstname} className='form__input'
                 onChange={(e) => handleInputChange(e)} placeholder='First Name' required />
        </div>
        <div className='lastname'>
          <label className='form__label' htmlFor='lastname'>Last Name </label>
          <input type='text' name='' id='lastname' value={lastname} className='form__input'
                 onChange={(e) => handleInputChange(e)} placeholder='Last Name' required />
        </div>
        <div className='email'>
          <label className='form__label' htmlFor='email'>Email </label>
          <input type='email' id='email' className='form__input' value={email} onChange={(e) => handleInputChange(e)}
                 placeholder='Email' required />
        </div>
        <div className='password'>
          <label className='form__label' htmlFor='password'>Password </label>
          <input className='form__input' type='password' id='password' value={password}
                 onChange={(e) => handleInputChange(e)} placeholder='Password' required />
        </div>
        <div className='confirm-password'>
          <label className='form__label' htmlFor='confirmPassword'>Confirm Password </label>
          <input className='form__input' type='password' id='confirmPassword' value={confirmPassword}
                 onChange={(e) => handleInputChange(e)} placeholder='Confirm Password' required />
        </div>
      </div>
      <div className='footer'>
        <button type='submit' className='btn'>Register</button>
      </div>
    </StyledRegisterationForm>
  );
}


export default Register;
