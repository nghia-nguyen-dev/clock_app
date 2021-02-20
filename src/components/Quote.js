import React from "react";
import "../css/Quote.css";
import Refresh from "../components/icons/Refresh";

class Quote extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			author: null,
			content: null,
		};
		this.getQuote = this.getQuote.bind(this)
	}

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

	getQuote() {
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
				<div className="quote__text">
					<p className="quote__content">{this.state.content}</p>
					<p className="quote__author"><span>—</span>{this.state.author}</p>
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
