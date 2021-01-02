import React, { Component } from 'react';
import './display.css';


class Display extends Component {
    hour(){
        if(this.props.hour > 0){
            return (
                <span>{this.props.time.hour}</span>
            );
        }
        return "";
    }
    render(){
        return(
            <div className="stopwatch">
                {this.hour() && `:&nbsp;&nbsp;`}
                <span >{this.props.time.minutes}</span>&nbsp;:&nbsp;
                <span >{this.props.time.seconds}</span>&nbsp;:&nbsp;
                <span >{this.props.time.ms}</span>
            </div>
        );
    }
}

export default Display;