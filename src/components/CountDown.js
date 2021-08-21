import React, { useState, useEffect } from "react";

function CountDown () {

    let [secondsInput, setSecondsInput] = useState(0)
    let [minutesInput, setMinutesInput] = useState(0)
    let [hoursInput, setHoursInput] = useState(0)
    let [daysInput, setDaysInput] = useState(0)

    let [secondsLeft, setSecondsLeft] = useState(0)
    let [timerStarted, setTimerStarted] = useState(false)


    let setSeconds= (e) => {
        setSecondsInput(e.target.value)
    }

    let setMinutes= (e) => {
        setMinutesInput(e.target.value)
    }

    let setHours= (e) => {
        setHoursInput(e.target.value)
    }

    let setDays= (e) => {
        setDaysInput(e.target.value)
    }

    let decreaseSecs = () => {
        setTimerStarted(true)
        setSecondsLeft(secondsInput*1 + minutesInput*60 + hoursInput*60*60 + daysInput*60*60*24)
    }

    function showRemainingTime () {
        let secondsShown = secondsLeft%60
        let minutesShown = Math.floor(secondsLeft/60) - Math.floor(secondsLeft/(60*60))*60
        let hoursShown = Math.floor(secondsLeft/(60*60)) - Math.floor(secondsLeft/(60*60*24))*24
        let daysShown = Math.floor(secondsLeft/(60*60*24))

        return (
            <>
            <h1>{daysShown} days {hoursShown} hours {minutesShown} minutes {secondsShown} seconds left</h1>
            </>
        )
    }

    useEffect(() => {
        let timer
        if(timerStarted){
            timer = setTimeout(() => {
            if (secondsLeft < 2){
                setTimerStarted(false)
            } 
            setSecondsLeft( secondsLeft - 1 )
        }, 1000)
        }
        return () => {
            clearTimeout(timer)}
    }, 
    [timerStarted, secondsLeft]
    )

    return (
        <>  
<           label>Days: </label>
            <input type="text" 
            onChange={setDays}
            disabled={timerStarted} 
            />

            <label> Hours: </label>
            <input type="text" 
            onChange={setHours}
            disabled={timerStarted} 
            />

            <label> Minutes: </label>
            <input type="text" 
            onChange={setMinutes}
            disabled={timerStarted}  
            />

            <label> Seconds: </label>
            <input type="text" 
            onChange={setSeconds} 
            disabled={timerStarted} 
            />
            
            <button 
            onClick={() => {decreaseSecs()}} 
            disabled={timerStarted}>
                Count down!
            </button>

            {showRemainingTime()}
        </>
    )
}

export default CountDown