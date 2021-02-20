import React from "react";
import Clock from "./Clock";
import UserLocation from "./UserLocation";

const Widget = () => {
	return (
		<div className="widget">
			<Clock />
			<UserLocation />
		</div>
	);
};

export default Widget;
