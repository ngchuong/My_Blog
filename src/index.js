import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { createGlobalStore } from './store';
const store = createGlobalStore();

const rootApp = (
	<Provider store={store}>
			<App />
	</Provider>
);

ReactDOM.render(rootApp, document.getElementById('root'));

