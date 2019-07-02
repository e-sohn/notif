// import React, {useState, useReducer} from 'react';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';

const RegisterForm = () => {
  const {userInput, handleChange, handleSubmit} = useContext(UserContext);
  return(
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type='text' placeholder='Email' name='email' value={userInput.email || ''} onChange={handleChange} />
      <input type='text' placeholder='Username' name='username' value={userInput.username || ''} onChange={handleChange} />
      <input type='text' placeholder='Password' name='password' value={userInput.password || ''} onChange={handleChange} />
      <input type='Submit' />
    </form>
  );
}

export default RegisterForm;
