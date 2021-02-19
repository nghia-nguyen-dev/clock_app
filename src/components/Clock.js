import React from "react";

function rmAMandPM(time) {
	return time.replace(" PM", "").replace(" AM", "");
}

const options = {
	hour: "2-digit",
	minute: "2-digit",
};

class Clock extends React.Component {
	state = {
		time: new Date().toLocaleTimeString([], options),
		afternoon: null,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString([], options) });
		}, 1000);
	}

	render() {
		return <div className="clock">{rmAMandPM(this.state.time)}</div>;
	}
}

export default Clock;
