import React, {createContext, useState} from 'react';
import { postUser } from '../services/apiHelper';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [userInput, setUserInput] = useState({
    email: '',
    username: '',
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
    postUser(userInput);
    setUserInput({
      email: '',
      username: '',
      password: ''
    });
  }

  return(
    <UserContext.Provider value={{userInput, handleChange, handleSubmit}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
