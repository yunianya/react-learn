import React, { useState, useEffect } from 'react';
import './App.css';
import { ForceUpdate } from './react/packages/react-reconciler/src/ReactUpdateQueue';

let i = 0

function App() {
  const [a, seta] = useState(0)
  // useEffect(() => {
  //   seta(i)
  // })

  return (
    <div className="App" onClick={() => {
      seta(1)
      seta(2)
    }}>{i}</div>
  );
}

export default App;
