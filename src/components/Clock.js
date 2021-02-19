import React from "react";

class Clock extends React.Component {
    options = {
        hour: "2-digit",
        minute: "2-digit",
    }
	state = {
		time: new Date().toLocaleTimeString([], this.options),
	};

	render() {
		return <div className="clock">{this.state.time}</div>;
	}
}

export default Clock;
