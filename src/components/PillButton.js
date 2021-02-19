import React from "react";
import CircleChevron from './CircleChevron';
import '../css/PillButton.css'

class PillButton extends React.Component {
	render() {
		return (
			<div className="pill-button">
				<p className="pill-button__text">More</p>
				<CircleChevron className="chevron" />
			</div>
		);
	}
}

export default PillButton;
