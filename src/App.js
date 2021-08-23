import './App.css';
import { useState } from 'react';
import CountDown from './components/CountDown'
import InputPage from './components/InputPage';

function App() {
  let [timerStarted, setTimerStarted] = useState(false)
  let [secondsLeft, setSecondsLeft] = useState(0)
  let [occation, setOccation] = useState("")

  return (
    <div className="App">

          <div className="InputPage" style = {{ display: timerStarted ? "none" : "block" }}>
              <InputPage
                
                setTimerStarted={setTimerStarted}
                setSecondsLeft={setSecondsLeft}
                setOccation={setOccation}
              />
          </div>

          <div className="Countdown" style = {{ display: timerStarted ? "block" : "none" }}>
              <CountDown
                secondsLeft={secondsLeft} 
                setSecondsLeft={setSecondsLeft}
                timerStarted={timerStarted}
                setTimerStarted={setTimerStarted}
                occation={occation}
              />
          </div>

    </div>
  );
}

export default App;
