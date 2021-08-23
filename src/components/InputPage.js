import React, { useState, useEffect, useContext } from "react";
import CountDown from "./CountDown";

export default function InputPage(props) {

    let setSecondsLeft = props.setSecondsLeft
    let setTimerStarted = props.setTimerStarted
    let setOccation = props.setOccation

    let today = new Date();

    let minmin = String(today.getMinutes()).padStart(2, '0');
    let hh = String(today.getHours()).padStart(2, '0');
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    let nextDd = String(today.getDate() +1).padStart(2, '0');
    let currentTime = hh + ':' + minmin
    today = `${yyyy}-${mm}-${dd}`;
    let nextDay = `${yyyy}-${mm}-${nextDd}`;
    let midnight = '00:00';
    let currentDateTimeInSeconds = minmin * 60 + hh * 60*60 + dd *60*60*24 + mm *60*60*24*30 + yyyy *60*60*24*30*12;

    let [dateInput, setDateInput] = useState(nextDay);
    let [timeInput, setTimeInput] = useState(midnight);
    let [dateTimeChosen, setDateTimeChosen] = useState(nextDay + ' ' + midnight);

    let minminChosen = dateTimeChosen.split(':')[1];
    let hhChosen = dateTimeChosen.split(':')[0].slice(-2);
    let ddChosen = dateTimeChosen.split('-')[2].slice(0, 2);
    let mmChosen = dateTimeChosen.split('-')[1];
    let yyyyChosen = dateTimeChosen.split('-')[0];
    
    let dateTimeChosenInSeconds = minminChosen * 60 + hhChosen * 60*60 + ddChosen *60*60*24 + mmChosen *60*60*24*30 + yyyyChosen *60*60*24*30*12;
    let secondsToCountDown = dateTimeChosenInSeconds - currentDateTimeInSeconds

    let[occationInput, setOccationInput] = useState("")

    let setDate= (e) => {
        try{
            if (e.target.value === today && timeInput < currentTime){
                throw new Error('The date should be in the future!')
            } else {
                setDateInput(e.target.value)
                setDateTimeChosen(e.target.value + ' ' + timeInput)
            }
        }
        catch(error){
            alert(error.message)
            setTimeInput(currentTime)
        }
    }
    
    let setTime= (e) => {
        try{
            if (dateInput === today && e.target.value < currentTime){
                throw new Error('The date should be in the future!')
            } else {
                setTimeInput(e.target.value)
                setDateTimeChosen(dateInput + ' ' + e.target.value)
            }
        }
        catch(error){
            alert(error.message)
            setTimeInput(currentTime)
        }
    }

    return (
        <>


            <input 
            type="date" 
            min={today} 
            onChange={setDate}
            value={dateInput}
            />
            
            <input 
            type="time"
            min={midnight}
            onChange={setTime}
            value={timeInput}
            />

            <input 
            type="text"
            onChange={(e) => setOccationInput(e.target.value)}
            />

            <button
            onClick={
                async () => {
                setSecondsLeft(secondsToCountDown)
                setOccation(occationInput)
                await setTimerStarted(true)
                }
            }
            >
            Start!    
            </button>
        </>
    )
}
