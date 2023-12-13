import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='App-header'>
      <h1>Date: {dateTime.toLocaleDateString()}</h1>
      <h1>Time: {dateTime.toLocaleTimeString()}</h1>
      <button onClick={() => setDateTime(new Date())}>
        Get Date and Time
      </button>
    </div>
  );
}

export default App;
