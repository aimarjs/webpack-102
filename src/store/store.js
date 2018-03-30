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

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from '../client/reducers';
//
// export default () => {
// 	const store = createStore(reducers, {}, applyMiddleware(thunk));
//
// 	return store;
// };
