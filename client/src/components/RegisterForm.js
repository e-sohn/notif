import React, {useState, useReducer} from 'react';

const RegisterForm = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput({
      email: '',
      userName: '',
      password: ''
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type='text' placeholder='Email' name='email' value={userInput.email} onChange={handleChange} />
      <input type='text' placeholder='Username' name='userName' value={userInput.userName} onChange={handleChange} />
      <input type='text' placeholder='Password' name='password' value={userInput.password} onChange={handleChange} />
      <input type='Submit' value='Submit' />
    </form>
  );
}

export default RegisterForm;
