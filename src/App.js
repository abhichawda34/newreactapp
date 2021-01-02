import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';


class App extends Component{
  constructor(){
    super();
    this.state = {
      time: {
        hour: 0,
        minutes: 0,
        seconds: 0,
        ms: 0
      },
      status: 0,
      stopID: 0
    }

    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.run = this.run.bind(this);
  }

  start(){
    this.setState({
      status: 1
    })
    this.run();
    this.setState({
      stopID: setInterval(this.run,10)});
  }

  stop(){
    this.setState({
      status:1
    });
    clearInterval(this.state.stopID);
  }

  reset(){
    this.setState({
      status: 0,
      time: {
        hour: 0,
        minutes: 0,
        seconds: 0,
        ms: 0
      }
    })
  }

  run(){
    let updatedhour = this.state.time.hour;
    let updatedMinutes = this.state.time.minutes;
    let updatedSeconds = this.state.time.seconds;
    let updatedMs = this.state.time.ms;

    if(updatedMinutes === 60) {
      updatedhour++;
      updatedMinutes = 0;
    }

    if(updatedSeconds === 60){
      updatedMinutes++;
      updatedSeconds = 0;
    }
    if(updatedMs === 100){
      updatedSeconds++;
      updatedMs = 0;
    }
    updatedMs++;
    this.setState({
      time: {
        hour: updatedhour,
        minutes: updatedMinutes,
        seconds: updatedSeconds,
        ms: updatedMs
      }
    })
  }

  render(){
    return(
      <div className="main-section">
        <div className="clock-holder">
          <Display time={this.state.time} />
          <Button status={this.state.status} reset={() => this.reset()} stop={() => this.stop()} start={()=> this.start()} />
        </div>
      </div>
    )
  }
}

export default App;
