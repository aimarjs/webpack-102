import React, { Component } from 'react';

class CounterPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	onCountClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div className="container">
				<div onClick={this.onCountClick.bind(this)} className="container">
					<h2>Counter: {this.state.count}</h2>
					<p>Click to test React</p>
				</div>
			</div>
		);
	}
}

export default CounterPage;
