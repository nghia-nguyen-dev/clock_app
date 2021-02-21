import React from "react";
import "../css/Dashboard.css";

class Dashboard extends React.Component {
	state = {
        time:null,
		timezone: null,
		dayOfYr: null,
		dayOfWk: null,
		wkNumber: null,
	};

	componentDidMount() {
        fetch("http://worldtimeapi.org/api/ip")
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
			<div className="dashboard">
				<div className="timezone">
					<p>current timezone</p>
					<p className="timezone__data">{this.state.timezone}</p>
				</div>
				<div className="day-of-yr">
					<p>day of the year</p>
					<p className="day-of-yr__data">{this.state.dayOfYr}</p>
				</div>
				<div className="day-of-wk">
					<p>day of the week</p>
					<p className="day-of-wk__data">{this.state.dayOfWk}</p>
				</div>
				<div className="wk-number">
					<p>week number</p>
					<p className="wk-number__data">{this.state.wkNumber}</p>
				</div>
			</div>
		);
	}
}

export default Dashboard;
