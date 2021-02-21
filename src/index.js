import React from "react";
import ReactDOM from "react-dom";
import Widget from "./components/Widget";
import PillButton from "./components/PillButton";
import Quote from "./components/Quote";
import Backdrop from "./components/Backdrop";
import Dashboard from "./components/Dashboard";

import "./css/index.css";
import Clock from "./components/Clock";

const App = () => {
	return (
		<div className="app">
			<Backdrop />
			<div className="container">
				<div className="widgets">
					<Quote />
					<div>
						<Widget />
						<PillButton text="more" />
					</div>
				</div>
				<Dashboard />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
