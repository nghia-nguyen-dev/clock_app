import React from "react";
import CircleChevron from "./CircleChevron";
import "../css/PillButton.css";

class PillButton extends React.Component {
	render() {
		return (
			<div className="pill-button" onClick={this.props.handleClick}>
				<p className="pill-button__text">{this.props.text}</p>
				<CircleChevron className="chevron" />
			</div>
		);
	}
}

export default PillButton;
