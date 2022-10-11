import React, { ChangeEvent, useState } from 'react';
import { StyledRegisterationForm } from '../../styles/RegistrationForm.styled';

function Register() { //Todo: change to useReducer

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
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

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <StyledRegisterationForm className='registration-form'> // change to Generic Form Component
      <div className='form-body'>
        <div className='username'>
          <label className='form__label' htmlFor='firstName'>First Name </label>
          <input className='form__input' type='text' value={firstName} onChange={(e) => handleInputChange(e)}
                 id='firstName' placeholder='First Name' required/>
        </div>
        <div className='lastname'>
          <label className='form__label' htmlFor='lastName'>Last Name </label>
          <input type='text' name='' id='lastName' value={lastName} className='form__input'
                 onChange={(e) => handleInputChange(e)} placeholder='LastName' required/>
        </div>
        <div className='email'>
          <label className='form__label' htmlFor='email'>Email </label>
          <input type='email' id='email' className='form__input' value={email} onChange={(e) => handleInputChange(e)}
                 placeholder='Email' required/>
        </div>
        <div className='password'>
          <label className='form__label' htmlFor='password'>Password </label>
          <input className='form__input' type='password' id='password' value={password}
                 onChange={(e) => handleInputChange(e)} placeholder='Password' required/>
        </div>
        <div className='confirm-password'>
          <label className='form__label' htmlFor='confirmPassword'>Confirm Password </label>
          <input className='form__input' type='password' id='confirmPassword' value={confirmPassword}
                 onChange={(e) => handleInputChange(e)} placeholder='Confirm Password' required/>
        </div>
      </div>
      <div className='footer'>
        <button onClick={() => handleSubmit()} type='submit' className='btn'>Register</button>
      </div>
    </StyledRegisterationForm>
  );
}


export default Register;
