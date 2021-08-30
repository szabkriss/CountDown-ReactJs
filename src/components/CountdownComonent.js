import { useState } from 'react';
import CountDown from '../pages/CountdownPage'
import InputPage from '../pages/InputPage';

function CountdownComponent() {
  let [timerStarted, setTimerStarted] = useState(false)
  let [secondsLeft, setSecondsLeft] = useState(0)
  let [occation, setOccation] = useState("")

  return (
    <div className="CoutdownComponent">

          <div 
          className="InputPage" 
          style = {{ display: timerStarted ? "none" : "flex" }}
          >
              <InputPage
                setTimerStarted={setTimerStarted}
                setSecondsLeft={setSecondsLeft}
                setOccation={setOccation}
              />
          </div>

          <div 
          className="Countdown" 
          style = {{ display: timerStarted ? "flex" : "none" }}
          >
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

export default CountdownComponent;
