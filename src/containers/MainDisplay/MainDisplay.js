import React, { Component } from 'react';

import classes from './MainDisplay.module.css'

import Button from '../../components/Button/Button';
import Stopwatch from '../Stopwatch/Stopwatch';
import CountDown from '../CountDown/CountDown';
import Statistics from '../Statistics/Statistics';

class MainDisplay extends Component {

	state = {
		countDownIsShown: false,
		stopwatchIsShown: true,
	}

	switchTimer = () => {
		this.setState({
			countDownIsShown: !this.state.countDownIsShown,
			stopwatchIsShown: !this.state.stopwatchIsShown,	
		})
	}

	render(){
		return(
			<div className={classes.mainDisplayWrapper}>
				<h2>Title of your business</h2>

				<div className={classes.timers}>
					<div className={classes.timerWrapper}>
						<Stopwatch isShown={this.state.stopwatchIsShown}/>
						<CountDown isShown={this.state.countDownIsShown}/>
					</div>
					<div className={classes.switchBtnWrapper}>
						<button onClick={this.switchTimer} className={classes.switchBtn}>SWITCH</button>
					</div>	
				</div>
				<br/><br/><br/>
				<Button>ADD HOURS</Button>
				<p>|</p>
				<p>|</p>
				<p>|</p>
				<p>w</p>
				<Statistics/>
			</div>
			)
	}

}

export default MainDisplay;