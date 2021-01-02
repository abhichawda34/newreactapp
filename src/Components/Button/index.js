import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render(){
        return(
            <div className="stopwatch">
                {this.props.status === 0 && (
                    <button className="stopwatch-btn stopwatch-btn-gre" onClick={this.props.start}>START</button>
                )} 

                {this.props.status === 1 && (
                    <div>
                        <button className="stopwatch-btn stopwatch-btn-red" onClick={this.props.stop}>STOP</button>
                        <button className="stopwatch-btn stopwatch-btn-yel" onClick={this.props.reset}>RESET</button>
                    </div>
                )}

                {this.props.status === 2 && (
                    <div>
                        <button className="stopwatch-btn stopwatch-btn-gre" onClick={this.props.resume}>RESUME</button>
                        <button className="stopwatch-btn stopwatch-btn-yel" onClick={this.props.reset}>RESET</button>
                    </div>
                )}

                
            </div>
        )
    }
}

export default Button;