import React from 'react';
import { withRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

export const RouteDataLoader = withRouter(
	class extends React.Component {
		componentWillReceiveProps(nextProps) {
			if (nextProps.location != this.props.location) {
				matchRoutes(this.props.routes, nextProps.location).forEach(
					({ route, match }) => {
						this.props.dispatch(route.loadData(match));
					}
				);
			}
		}

		render() {
			return this.props.children;
		}
	}
);
