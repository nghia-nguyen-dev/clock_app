import React from "react";
import ReactDOM from "react-dom";
import Widget from './components/Widget'
import PillButton from './components/PillButton';
import Quote from './components/Quote'

import "./css/index.css";

const App = () => {
	return (
        <div className="app">
            <Quote />
            <Widget />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
