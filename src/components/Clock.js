import React from "react";
import '../css/Clock.css'

const options = {
	hour: "2-digit",
	minute: "2-digit",
	timeZoneName: "short",
};

class Clock extends React.Component {
	state = {
		time: this.getTime(0),
		timeZone: this.getTime(2),
		timeOfDay: this.getTime(1),
	};

	componentDidMount() {
		setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick() {
		this.setState({
			time: this.getTime(0),
			timeZone: this.getTime(2),
			timeOfDay: this.getTime(1),
		});
	}

	getTime(index) {
		return new Date().toLocaleTimeString([], options).split(" ")[index]; // [time, AM/PM, timezone]
	}

	render() {
		return (
			<div className="clock">
                <h1 className="clock__time">{this.state.time}</h1>
				{this.state.timeZone}
				{this.state.timeOfDay}
			</div>
		);
	}
}

export default Clock;
