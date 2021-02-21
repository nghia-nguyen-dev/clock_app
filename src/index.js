import React from "react";
import ReactDOM from "react-dom";
import Widget from "./components/Widget";
import PillButton from "./components/PillButton";
import Quote from "./components/Quote";
import Backdrop from "./components/Backdrop";
import Dashboard from "./components/Dashboard";

import "./css/index.css";
import Clock from "./components/Clock";

class App extends React.Component {
	state = {
		isDashboardOpen: false,
	};

	handleClick = () => {
		console.log(this);
		this.setState({ isDashboardOpen: !this.state.isDashboardOpen });
	};

	render() {
		return (
			<div className="app">
				<Backdrop />
				<div
					className={`container ${
						this.state.isDashboardOpen ? "open" : ""
					}`}
				>
					<div className="widgets">
						<Quote />
						<div>
							<Widget />
							<PillButton
                                class={this.state.isDashboardOpen ? 'rotate': ''}
								text={this.state.isDashboardOpen ? 'less': 'more'}
								handleClick={this.handleClick}
							/>
						</div>
					</div>
					<Dashboard />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
