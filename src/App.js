import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './container/login/login.js'
import Register from './container/register/register.js'
import AuthRoute  from './component/authroute/authroute.js'
import Recruiterinfo from './container/recruiterinfo/recruiterinfo.js'
import Hunterinfo from './container/hunterinfo/hunterinfo.js'
import Chat from './component/chat/chat.js'
import Dashboard from './component/dashboard/dashboard'

export default class App extends React.Component{
	render(){
		return  (
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path = '/recruiterinfo' component = { Recruiterinfo }></Route>
					<Route path = '/hunterinfo' component = { Hunterinfo }></Route>
					<Route path = '/login' component={ Login }></Route>
					<Route path = '/register' component={ Register }></Route>
					<Route path = '/chat/:user' component={ Chat }></Route>
					<Route component={ Dashboard }></Route>
				</Switch>
			</div>
		)
	}
}
