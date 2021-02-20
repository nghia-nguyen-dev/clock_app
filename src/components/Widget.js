import React from "react";
import Clock from "./Clock";
import GreetingMsg from "./GreetingMsg";
import UserLocation from "./UserLocation";

const Widget = () => {
	return (
		<div className="widget">
            <GreetingMsg />
			<Clock />
			<UserLocation />
		</div>
	);
};

export default Widget;
