import React from "react";
import "../css/Backdrop.css";

const image = {
	day: "backdrop__image--day",
	afternoon: "backdrop__image--afternoon",
	night: "backdrop__image--night",
};

function getGreeting(hour) {
	if (hour < 12) {
		return image.day;
	} else if (hour < 18) {
		return image.afternoon;
	} else {
		return image.night;
	}
}

const Backdrop = () => {
	return (
		<div className="backdrop">
			<div
				className={`backdrop__image ${getGreeting(
					new Date().getHours()
				)}`}
			/>
			<div className="backdrop__opacity-layer" />
		</div>
	);
};

export default Backdrop;
