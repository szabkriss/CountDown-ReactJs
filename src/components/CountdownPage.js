import React, { useState, useEffect } from "react";

function CountdownPage (props) {

    let secondsLeft = props.secondsLeft
    let setSecondsLeft = props.setSecondsLeft
    let timerStarted = props.timerStarted
    let setTimerStarted = props.setTimerStarted
    let occation = props.occation

    function showRemainingTime () {
        let secondsShown = secondsLeft%60
        let minutesShown = Math.floor(secondsLeft/60) - Math.floor(secondsLeft/(60*60))*60
        let hoursShown = Math.floor(secondsLeft/(60*60)) - Math.floor(secondsLeft/(60*60*24))*24
        let daysShown = Math.floor(secondsLeft/(60*60*24))

        return (
            <>
            <h3>
            {daysShown === 0 ? "" : `${daysShown} days `} 
            {hoursShown === 0 ? "" : `${hoursShown} hours `}
            {minutesShown === 0 ? "" : `${minutesShown} minutes `}
            {secondsShown === 0 ? "" : `${secondsShown} seconds `}
            left 
            {occation ? ` until ${occation}` : ""}
            </h3>
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
            {showRemainingTime()}
            <button
            onClick={() => setTimerStarted(false)}
            >
            Stop
            </button>
        </>
    )
}

export default CountdownPage