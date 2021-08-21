import React, { useState, useEffect } from "react";

export default function InputPage() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let nextDd = String(today.getDate() +1).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentTime = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0')
    today = `${yyyy}-${mm}-${dd}`;
    let nextDay = `${yyyy}-${mm}-${nextDd}`
    let midnight = '00:00'

    let [dateInput, setDateInput] = useState(nextDay)
    let [timeInput, setTimeInput] = useState(midnight)
    
    let setDate= (e) => {
        try{
            if (e.target.value === today && timeInput < currentTime){
                throw new Error('The date should be in the future!')
            } else {
                setDateInput(e.target.value)
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

            <button
            >
            Start!    
            </button>
        </>
    )
}
