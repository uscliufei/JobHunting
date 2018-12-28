import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';

import {counter, add, minus, AsyncAdd} from './index.redux'
// import {counter} from './es6.js'

const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	)
)


function render(){
	ReactDOM.render(
		(<Provider store={store}>
			<App />,
		</Provider>),
		document.getElementById('root')
		)
}
render()
store.subscribe(render)

 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
