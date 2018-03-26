import React, { Component } from "react";

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
      <div onClick={this.onCountClick.bind(this)}>
        <h1>Countss: {this.state.count}</h1>
      </div>
    );
  }
}
