import React from "react";
import '../css/Backdrop.css'

const image = {
    day: 'backdrop__image--day',
    night:'backdrop__image--night',
}

function getGreeting(hour) {
	if (hour < 12) {
		return image.day;
	} else {
		return image.night;
	} 
}

const Backdrop = () => {
	return (
		<div className="backdrop">
			<div className={`backdrop__image ${getGreeting(new Date().getHours())}`} />
			<div className="backdrop__opacity-layer" />
		</div>
	);
};

export default Backdrop
