import axios from 'axios';
import * as actionTypes from './actionTypes';
// import config from '../../config/config';

export const fetchStart = () => {
	return {
		type: actionTypes.FETCH_TEAM_START
	};
};

export const fetchSuccess = response => {
	return {
		type: actionTypes.FETCH_TEAM_SUCCESS,
		res: response.data
	};
};

export const fetchFail = error => {
	return {
		type: actionTypes.FETCH_TEAM_FAIL,
		error: error
	};
};

export const fetch = () => async dispatch => {
	dispatch(fetchStart());
	try {
		const res = await axios.get(`https://www.domeca.ee/api/team`);
		dispatch(fetchSuccess(res));
	} catch (error) {
		dispatch(fetchFail(error));
	}
};

export const fetchAll = () => {
	return dispatch => {
		dispatch(fetchStart());
		axios
			.get(`https://www.domeca.ee/api/team?show=all`)
			.then(response => {
				dispatch(fetchSuccess(response));
			})
			.catch(err => {
				// console.log(err);
				dispatch(fetchFail(err));
			});
	};
};
