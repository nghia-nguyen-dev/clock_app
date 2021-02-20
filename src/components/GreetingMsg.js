import React from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import "../css/GreetingMsg.css";

const greetings = {
	morning: {
		message: "Good morning",
		icon: <Sun />,
	},
	afternoon: {
		message: "Good afternoon",
		icon: <Sun />,
	},
	evening: {
		message: "Good evening",
		icon: <Moon />,
	},
};

function getGreeting(hour) {
	if (hour < 12) {
		return greetings.morning;
	} else if (hour < 18) {
		return greetings.afternoon;
	} else {
		return greetings.evening;
	}
}

function GreetingMsg() {

	return (
		<div className="greeting-msg">
			{getGreeting(new Date().getHours()).icon}
			<p className="greeting-msg__text">
				{getGreeting(new Date().getHours()).message}, It's currently
			</p>
		</div>
	);
    
}

export default GreetingMsg;
