import React from "react";
import CircleButton from './CircleButton';


class PillButton extends React.Component {
	render() {
		return (
			<div className="pill-button">
				<p>More</p>
				<CircleButton />
			</div>
		);
	}
}

export default PillButton;
