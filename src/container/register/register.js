import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, Button, Radio, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import jobForm from '../../component/jobform/jobform.js'

@connect(
	state=>state.user,
	{register}
)
@jobForm 
class Register extends React.Component{
	constructor(props){
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
	}
	componentDidMount(){
		this.props.handleChange('type','hunter')
	}
	handleRegister(){
		this.props.register(this.props.state)
	}
	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> :null }
				<Logo></Logo>
				<List>
					{this.props.msg?<p className = 'error-Msg'>{this.props.msg}</p>:null}
					<InputItem onChange = {v=>this.props.handleChange('user',v)}>Username</InputItem>
					<InputItem type = 'password' 
								onChange = {v=>this.props.handleChange('pwd',v)}
								>Password</InputItem>
					<InputItem type = 'password' labelNumber={10}
								onChange = {v=>this.props.handleChange('repeatedpwd',v)}
								 >Comfirm Password</InputItem>
					<RadioItem 
						checked={this.props.state.type==='hunter'} 
						onChange = {()=>this.props.handleChange('type','hunter')}
					> Job Hunter</RadioItem>
					<RadioItem 
						checked={this.props.state.type==='recruiter'}
						onChange={()=>this.props.handleChange('type','recruiter')}
					> Recruiter</RadioItem>
					<Button type='primary' onClick={this.handleRegister} >Register</Button>
				</List>
			</div>
		)
	}
}

export default Register