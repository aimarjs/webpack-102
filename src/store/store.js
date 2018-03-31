import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import teamReducer from './reducers/teamReducer';

const rootReducer = combineReducers({
	team: teamReducer
});

let composeEnhancers = null;

if (process.env.NODE_ENV === 'development') {
	composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
} else {
	composeEnhancers = applyMiddleware(thunk);
}

export default initialState => {
	const store = createStore(rootReducer, initialState, composeEnhancers);
	return store;
};
