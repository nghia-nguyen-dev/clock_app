import React from "react";
import '../css/Backdrop.css'

const image = {
    day: 'backdrop__image--day',
    night:'backdrop__image--night',
}

const Backdrop = () => {
	return (
		<div className="backdrop">
			<div className={`.backdrop__image ${image.day}`} />
			<div className="backdrop__opacity-layer" />
		</div>
	);
};

export default Backdrop
