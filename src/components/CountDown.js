import React, { useState, useEffect } from "react";

function CountDown () {

    let [secondsShown, setSecondsShown] = useState(0)
    let [minutesShown, setMinutesShown] = useState(0)
    let [hoursShown, setHoursShown] = useState(0)
    let [secondsLeft, setSecondsLeft] = useState(0)
    let [timerStarted, setTimerStarted] = useState(false)


    let setSeconds= (e) => {
        setSecondsShown(e.target.value)
    }

    let setMinutes= (e) => {
        setMinutesShown(e.target.value)
    }

    let setHours= (e) => {
        setHoursShown(e.target.value)
    }

    let setTimer= () =>{
            setSecondsShown(secondsLeft%60)
            setMinutesShown(Math.floor(secondsLeft/60) - Math.floor(secondsLeft/(60*60))*60)
            setHoursShown(Math.floor(secondsLeft/(60*60)))
    }

    let decreaseSecs = () => {
        setTimerStarted(true)
        setSecondsLeft(secondsShown*1 + minutesShown*60 + hoursShown*60*60)
    }

    useEffect(() => {
        let timer
        if(timerStarted){
            timer = setTimeout(() => {
            if(secondsLeft < 1){
                setTimerStarted(false)
            } 
            setSecondsLeft( secondsLeft - 1 )
            setTimer()
        }, 1000)
        }
        return () => {
            clearTimeout(timer)}
    }, [timerStarted, secondsLeft])

    return (
        <>  
            <label>Hours:</label>
            <input type="text" 
            onChange={setHours}
            disabled={timerStarted} 
            />

            <label>Minutes:</label>
            <input type="text" 
            onChange={setMinutes}
            disabled={timerStarted}  
            />

            <label>Seconds:</label>
            <input type="text" 
            onChange={setSeconds} 
            disabled={timerStarted} 
            />
            
            <button 
            onClick={() => {decreaseSecs()}} 
            disabled={timerStarted}>
                Count down!
            </button>

            <h1>{hoursShown}:{minutesShown}:{secondsShown}</h1>
        </>
    )
}

export default CountDown