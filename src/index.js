import React from "react";
import ReactDOM from "react-dom";
import PillButton from './components/PillButton';
import Clock from './components/Clock'

import "./css/index.css";

const App = () => {
	return (
        <div className="app">
            <PillButton text="more"/>
            <Clock />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
