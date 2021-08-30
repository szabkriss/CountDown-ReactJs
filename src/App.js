import './App.css';
import { useState } from 'react';
import CountDown from './pages/CountdownPage'
import InputPage from './pages/InputPage';
import CountdownComponent from './components/CountdownComonent';

function App() {

  return (
    <div className="App">
      <CountdownComponent/>
      <CountdownComponent/>
      <button className="Plus-button">+</button>
    </div>
  );
}

export default App;
