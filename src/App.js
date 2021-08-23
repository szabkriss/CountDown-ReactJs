import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CountDown from './components/CountDown'
import InputPage from './components/InputPage';

function App() {
  let [timerStarted, setTimerStarted] = useState(false)
  let [secondsLeft, setSecondsLeft] = useState(0)

  let startCountDown = () => {
    console.log('start countdown')
    setTimerStarted(true)
}


  return (
    <div className="App">

                    <CountDown
                      display="none"
                      secondsLeft={secondsLeft} 
                      setSecondsLeft={setSecondsLeft}
                      timerStarted={timerStarted}
                      setTimerStarted={setTimerStarted}
                    />

                    <InputPage
                      setTimerStarted={setTimerStarted}
                      setSecondsLeft={setSecondsLeft}
                    />

    </div>
  );
}

export default App;
