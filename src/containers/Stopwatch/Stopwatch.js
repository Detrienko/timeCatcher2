import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import classes from './Stopwatch.module.css';

class Stopwatch extends Component {

  state = {
  	timerOn: false,
  	timeStart: 0,
  	timerTime: 0
  }

  startTimer = () => {
  	this.setState({
  		timerOn: true,
  		timerStart: Date.now() - this.state.timerTime
  	})

  this.timer = setInterval(()=> {
  	this.setState({
  		timerTime: Date.now() - this.state.timerStart,
  	})
  }, 10)

  }

  stopTimer = () => {
  	this.setState({
  		timerOn: false,
  	})
  	clearInterval(this.timer);
  }

  resetTimer = () => {
    if (this.state.timerOn === false){
    	this.setState({
    		timerStart: 0,
    		timerTime: 0
    	})
    }
  }


  render() {

  	const {timerTime} = this.state;

  	let centiseconds = ("0" + (Math.floor(timerTime / 10)% 100)).slice(-2);
	let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
	let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
	let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  let stopwatch;  
    if(this.props.isShown){     
      stopwatch = <div className={classes.stopwatch}>
        <div className={classes.stopwatchHeader}>Stopwatch</div>
        <p className={classes.stopwatchTime}>{hours} : {minutes} : {seconds} : {centiseconds}</p>

        {this.state.timerOn === false && (
          <Button clicked={this.startTimer}>Start</Button>
          )}
        {this.state.timerOn === true && (
          <Button clicked={this.stopTimer}>Stop</Button>
          )}
        <Button clicked={this.resetTimer}>Reset</Button>
      </div>
    }

    return (
      <div>
        {stopwatch}
      </div>
    );

  }
}

export default Stopwatch;
