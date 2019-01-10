import React from 'react'
import Logo from '../../component/logo/logo.js'
import { connect } from 'react-redux'
import { List, Button,  InputItem, WingBlank, WhiteSpace} from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import jobForm from '../../component/jobform/jobform.js'


@connect(
	state =>state.user,
	{ login }
)
@jobForm
class Login extends React.Component{
	constructor(props){
		super(props)
		this.register=this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
		// this.test=this.test.bind(this)
	}
	register(){
		this.props.history.push('/register') 
	}
	handleLogin(){
		// console.log('log in')
		this.props.login(this.props.state)
	}
	// test(){
	// 	console.log('test')
	// }
	render(){
		return (
			<div>
				{(this.props.redirectTo&&this.props.redirectTo!=='/login') 
					? <Redirect to={this.props.redirectTo}></Redirect> :null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg?<p className = 'error-Msg'>{this.props.msg}</p>:null}
						<InputItem onChange = {v=>this.props.handleChange('user',v)}>Username</InputItem>
						<WhiteSpace /> 
						<InputItem onChange = {v=>this.props.handleChange('pwd',v)}  type = 'password'>Password</InputItem>
					</List>
					<WhiteSpace />
					<Button onClick={this.handleLogin} type='primary'> Log in </Button>
					<WhiteSpace />
					<Button onClick={this.register} type='primary'> Register </Button>
				</WingBlank>
			</div>
		)
	}
}
//<Button onClick={this.register} type='primary'> Register </Button>


export default Login




