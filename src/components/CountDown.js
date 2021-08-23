import React, { useState, useEffect } from "react";

function CountDown (props) {

    let secondsLeft = props.secondsLeft
    let setSecondsLeft = props.setSecondsLeft
    let timerStarted = props.timerStarted
    let setTimerStarted = props.setTimerStarted
    let occation = props.occation

    function showRemainingTime () {
        console.log('show remaining time')
        let secondsShown = secondsLeft%60
        let minutesShown = Math.floor(secondsLeft/60) - Math.floor(secondsLeft/(60*60))*60
        let hoursShown = Math.floor(secondsLeft/(60*60)) - Math.floor(secondsLeft/(60*60*24))*24
        let daysShown = Math.floor(secondsLeft/(60*60*24))

        return (
            <>
            <h3>{daysShown} days {hoursShown} hours {minutesShown} minutes {secondsShown} seconds left until {occation}</h3>
            </>
        )
    }

    useEffect(() => {
        let timer
        console.log(timerStarted)
        console.log(secondsLeft)
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
            {showRemainingTime()}
        </>
    )
}

export default CountDown