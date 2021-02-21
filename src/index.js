import React from "react";
import ReactDOM from "react-dom";
import Widget from './components/Widget'
import PillButton from './components/PillButton';
import Quote from './components/Quote'
import Backdrop from './components/Backdrop'
import Dashboard from './components/Dashboard'

import "./css/index.css";

const App = () => {
	return (
        <div className="app">
            <Backdrop />
            <Quote />
            <Widget />
            {/* <PillButton text="more"/> */}
            <Dashboard />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
