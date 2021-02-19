import React from "react";
import Clock from "./Clock";

const Widget = () => {
	return (
		<div className="widget">
			<GreetingMsg />
			<Clock />
		</div>
	);
};

export default Widget;
