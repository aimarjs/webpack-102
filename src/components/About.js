import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/teamActions';

class AboutPage extends Component {
	componentDidMount() {
		this.props.onFetch();
	}
	render() {
		return this.props.team.members.map(member => {
			return <div key={member._id}>{member.name}</div>;
		});
	}
}

const mapStateToProps = state => {
	return {
		loading: state.team.loading,
		error: state.team.error,
		success: state.team.success,
		team: state.team.team
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetch: data => dispatch(actions.fetch())
	};
};

export default {
	component: connect(mapStateToProps, mapDispatchToProps)(AboutPage),
	loadData: ({ dispatch }) => dispatch(actions.fetch())
};
