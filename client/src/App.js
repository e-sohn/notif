import React from 'react';
import './App.css';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

function App() {

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
