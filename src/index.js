// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import App from './components/App';
//
// const render = Component => {
// 	ReactDOM.hydrate(
// 		<AppContainer>
// 			<Component />
// 		</AppContainer>,
// 		document.getElementById('root')
// 	);
// };
//
// render(App);
//
// if (module.hot) {
// 	module.hot.accept('./components/App', () => {
// 		render(App);
// 		render(require('./components/App'));
// 	});
// }

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.hydrate(<App />, document.getElementById('root'));
