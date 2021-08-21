import React, { useState, useEffect, useContext } from "react";
import { TimerContext, SecondsContext } from "./InputPage"

function CountDown () {

    let secondsToCountDown = useContext(SecondsContext)
    let timerStarted = useContext(TimerContext)

    let [secondsLeft, setSecondsLeft] = useState(0)

    function showRemainingTime () {
        console.log('show remaining time')
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
        setSecondsLeft(secondsToCountDown)
    }, [secondsToCountDown])

    useEffect(() => {
        let timer
        console.log(timerStarted)
        console.log(secondsToCountDown)
        if(timerStarted){
            timer = setTimeout(() => {
            // if (secondsLeft < 2){
            //     setTimerStarted(false)
            // } 
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
            {showRemainingTime}
        </>
    )
}

export default CountDown