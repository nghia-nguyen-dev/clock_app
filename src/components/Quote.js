import React from "react";

class Quote extends React.Component {
	state = {
		author: null,
		content: null,
	};

	componentDidMount() {
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					author: data.author,
					content: data.content,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className="quote">
				{this.state.content}
				{this.state.author}
			</div>
		);
	}
}

export default Quote;
