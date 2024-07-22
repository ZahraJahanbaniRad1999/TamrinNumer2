import React from 'react';
import ReactDOM from 'react-dom/client';

import './stylesheet1.css';

let interval;

class Timer3 extends React.Component{
    constructor(){
        super();
        this.state={
            Number:25
        }  
}
        Start=()=>{
            interval= setInterval(() => {
                this.setState({
                    Number:this.state.Number-1
                })
            }, 1000)
        }


        
        Stop=()=>{
                clearInterval(interval);
        }
    
    componentDidUpdate(){
        if(this.state.Number==0){
            this.Stop();
            }
    }

    
    
    render(){
        return(
            <>
            <h2 className="timer4">
                {this.state.Number}
            </h2>
            <div className='Bkol'>
            <button className="startButton" onClick={this.Start}>Start</button> 
            <br></br>
            <button className="stopButton" onClick={this.Stop}>Stop</button>
            {/* <button className="resetButton">Reset</button> */}
            </div>
            </> 
        )
    }
}

export default Timer3;