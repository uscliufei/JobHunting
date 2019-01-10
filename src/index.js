import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import reducers from './reducers'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import AuthRoute  from './component/authroute/authroute.js'
import Recruiterinfo from './container/recruiterinfo/recruiterinfo.js'
import Hunterinfo from './container/hunterinfo/hunterinfo.js'
import Chat from './component/chat/chat.js'
import Dashboard from './component/dashboard/dashboard'
import './index.css'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
import App from './app'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	)
)

ReactDOM.render(
	(<Provider store={store}> 
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>),  
	document.getElementById('root')
)