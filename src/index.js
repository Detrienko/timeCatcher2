import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import businessListReducer from './store/reducers/businessList';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
	
const rootReducer = combineReducers({
	businessList: businessListReducer,
})

const store = createStore(rootReducer)

const app = (
	<Provider store={store}>
		<App />
	</Provider>
	)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
