import React, { useState, useEffect } from 'react';
import './App.css';
import openSocket from 'socket.io-client';
import Main from './components/Main';

const socket = openSocket('http://localhost:3001');

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
