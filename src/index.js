import React from "react";
import ReactDOM from "react-dom";
import PillButton from './components/PillButton';

import "./css/index.css";

const App = () => {
	return (
        <div>
            <PillButton />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
