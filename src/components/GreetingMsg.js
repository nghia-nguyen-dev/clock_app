import React from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import '../css/GreetingMsg.css'

const greetingConfig = {
	beforeNoon: {
		message: "Good morning",
		icon: <Sun />,
	},
	afterNoon: {
		message: "Good evening",
		icon: <Moon />,
	},
};

function chooseGreeting(timeOfDay) {
	return timeOfDay === "PM"
		? greetingConfig.afterNoon
		: greetingConfig.beforeNoon;
}

class GreetingMsg extends React.Component {
	state = {
		timeOfDay: this.props.timeOfDay,
	};

	render() {
		return (
			<div className="greeting-msg">
				{chooseGreeting(this.state.timeOfDay).icon}
				<p className="greeting-msg__text">{chooseGreeting(this.state.timeOfDay).message}, It's currently</p>
			</div>
		);
	}
}

export default GreetingMsg;
