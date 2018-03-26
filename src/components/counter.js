import React, { Component } from 'react';
import Image from './images/webpack.png';

export default class extends Component {
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
			<div onClick={this.onCountClick.bind(this)} className="container">
				<img src={Image} alt="asas" />
				<h1>{this.props.headline}</h1>
				<h2>
					{this.props.count}: {this.state.count}
				</h2>
				<p>{this.props.subline}</p>
			</div>
		);
	}
}
