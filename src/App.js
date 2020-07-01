import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnABC from './LearnABC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Learn ABC
        </p>
      </header>
      <LearnABC />
    </div>
  );
}

export default App;
