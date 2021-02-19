import React from "react";
import ReactDOM from "react-dom";
import PillButton from './components/PillButton';
import Widget from './components/Widget'

import "./css/index.css";

const App = () => {
	return (
        <div className="app">
            <PillButton text="more"/>
            <Widget />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
