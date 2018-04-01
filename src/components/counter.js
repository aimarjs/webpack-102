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
				<div className="container">
					<h2>Counter: {this.state.count}</h2>
					<button onClick={this.onCountClick.bind(this)}>
						Click to test React
					</button>
				</div>
			</div>
		);
	}
}

export default { component: CounterPage };
