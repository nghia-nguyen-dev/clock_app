import React from "react";
import CircleChevron from './CircleChevron';


class PillButton extends React.Component {
	render() {
		return (
			<div className="pill-button">
				<p>More</p>
				<CircleChevron />
			</div>
		);
	}
}

export default PillButton;
