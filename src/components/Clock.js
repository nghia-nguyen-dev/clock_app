import React from "react";
import "../css/Clock.css";
import GreetingMsg from "./GreetingMsg";

const options = {
	hour: "2-digit",
	minute: "2-digit",
	timeZoneName: "short",
};

class Clock extends React.Component {
	state = {
		time: this.getTime(0),
		timeZone: this.getTime(2),
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
		});
	}

	getTime(index) {
		return new Date().toLocaleTimeString([], options).split(" ")[index]; // [time, AM/PM, timezone]
	}

	render() {
		return (
			<div className="clock">
				<h1 className="clock__time">{this.state.time}</h1>
				<p className="clock__time-zone">{this.state.timeZone}</p>
			</div>
		);
	}
}

export default Clock;
