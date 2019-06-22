import React, { useState, useEffect } from 'react';
import './App.css';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default App;
