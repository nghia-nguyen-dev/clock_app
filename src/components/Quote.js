import React from "react";
import "../css/Quote.css";
import Refresh from "../components/icons/Refresh";

class Quote extends React.Component {
	state = {
		author: null,
		content: null,
	};

	componentDidMount() {
		this.getQuote();
	}

	getQuote = () => {
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					author: data.author,
					content: data.content,
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="quote">
				<div className="quote__text">
					<p className="quote__content">{this.state.content}</p>
					<p className="quote__author">
						<span>—</span>
						{this.state.author}
					</p>
				</div>
				<Refresh
					className="quote__refresh-icon"
					getQuote={this.getQuote}
				/>
			</div>
		);
	}
}

export default Quote;
