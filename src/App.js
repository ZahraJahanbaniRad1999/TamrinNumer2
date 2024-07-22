import React from 'react';
import ReactDOM from 'react-dom/client';

import './stylesheet1.css';

import Timer3 from './Timer.js';


class App3 extends React.Component{
       constructor(){
        super();
        this.state={
            // title2:"سلام من اومدم"
        }

       }

       handleSetTitle2=()=>{
        this.setState({
            // title2:"خداحافظ"
        })
     }



    render(){
        return(
            <div className="main3">
                <Timer3 start={this.state.Start}/> 
            </div>
        )
    }
}

export default App3;