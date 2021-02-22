import React from "react";
import "../css/Dashboard.css";

function getTheme(hr) {
    return hr < 18 ? 'dashboard--day' : 'dashboard--night'
}

class Dashboard extends React.Component {
	state = {
        time:null,
		timezone: null,
		dayOfYr: null,
		dayOfWk: null,
		wkNumber: null,
	};

	componentDidMount() {
        fetch("https://worldtimeapi.org/api/ip")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    time: new Date(data.utc_datetime).toLocaleTimeString([],{ hour: '2-digit', hour12: false}),
                    timezone: data.timezone,
                    dayOfYr: data.day_of_year,
                    dayOfWk: data.day_of_week,
                    wkNumber: data.week_number
                })
            })
    }

	render() {
		return (
			<div className={`dashboard ${getTheme(parseInt(this.state.time))}`}>
				<div className="timezone">
					<p>current timezone</p>
					<h3>{this.state.timezone}</h3>
				</div>
				<div className="day-of-yr">
					<p>day of the year</p>
					<h3>{this.state.dayOfYr}</h3>
				</div>
				<div className="day-of-wk">
					<p>day of the week</p>
					<h3>{this.state.dayOfWk}</h3>
				</div>
				<div className="wk-number">
					<p>week number</p>
					<h3>{this.state.wkNumber}</h3>
				</div>
			</div>
		);
	}
}

export default Dashboard;
