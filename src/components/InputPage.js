import React, { useState, useEffect } from "react";

export default function InputPage() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let currentTime = String(today.getHours()).padStart(2, '0') + ':' + String(today.getMinutes()).padStart(2, '0')
    
    
    today = `${yyyy}-${mm}-${dd}`;
    let midnight = '00:00'

    let [dateInput, setDateInput] = useState(today)
    let [TimeInput, setTimeInput] = useState(midnight)
    
    let setDate= (e) => {
        setDateInput(e.target.value)
    }
    
    let setTime= (e) => {
        if (dateInput === today && e.target.value < currentTime){
            throw new Error('The date should be in the future!')
        } else {
            setTimeInput(e.target.value)
        }
        
    }

    
    return (
        <>
            <input 
            type="date" 
            min={today} 
            onChange={setDate}
            />
            
            <input 
            type="time"
            min={midnight}

            onChange={setTime}
            />

            <button
            >
            Start!    
            </button>
        </>
    )
}
