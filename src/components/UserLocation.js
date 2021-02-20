import React from "react";
import "../css/UserLocation.css";

class UserLocation extends React.Component {
	state = {
		location: "Loading...",
	};

	componentDidMount() {
		fetch("https://freegeoip.app/json/")
			.then((res) => res.json())
			.then((data) => {
				if (data.country_code === "US") {
					this.setState({
						location: `${data.city}, ${data.region_code}`,
					});
				} else {
					this.setState({
						location: `${data.city}, ${data.country_name}`,
					});
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		return <div className="user-location">{this.state.location}</div>;
	}
}

export default UserLocation;
