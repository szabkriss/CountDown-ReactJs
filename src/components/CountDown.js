import React from "react";

class CountDown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secondsShown: "",
            minutesShown: "",
            hoursShown: "",
            secondsLeft : 0
            
        }
    }

    setSeconds= (e) => {
        let num = e.target.value
            this.setState({secondsShown: num })
    }

    setMinutes= (e) => {
        let num = e.target.value
            this.setState({minutesShown: num })
    }

    setHours= (e) => {
        let num = e.target.value
            this.setState({hoursShown: num })
    }

    setTimer= () =>{
        this.setState({
            secondsShown: ((this.state.secondsLeft)%60),
            minutesShown: Math.floor(this.state.secondsLeft/60) - Math.floor(this.state.secondsLeft/(60*60))*60,
            hoursShown: Math.floor(this.state.secondsLeft/(60*60))
        })
    }

    decreaseSecs = () => {
        this.setState({secondsLeft: this.state.secondsShown*1 + this.state.minutesShown*60 + this.state.hoursShown*60*60}, () => {
            if(this.state.secondsLeft !== 0){
                this.siSec=setInterval(
                    () => {
                        this.setState({secondsLeft: this.state.secondsLeft-1})
                        this.setTimer()
                    }, 1000
                )}
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.secondsLeft<1){
            clearInterval(this.siSec)
        }

    }

    render(){
        return (
            <>  
                <label>Hours:</label>
                <input type="text" onChange={this.setHours} 
                value={this.state.hoursShown}/>


                <label>Minutes:</label>
                <input type="text" onChange={this.setMinutes} 
                value={this.state.minutesShown}/>

                <label>Seconds:</label>
                <input type="text" onChange={this.setSeconds} 
                value={this.state.secondsShown}/>
                
                <button onClick={() => {this.decreaseSecs()}}>Count down!</button>

                <h1>{this.state.hoursShown}:{this.state.minutesShown}:{this.state.secondsShown}</h1>
            </>
        )
    }
}

export default CountDown