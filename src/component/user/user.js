import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import  browserCookie from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import {logoutSubmit} from '../../redux/user.redux'


@connect(
	state=>state.user,
	{ logoutSubmit }
)
class User extends React.Component{
	constructor(props){
		super(props);
		this.logout = this.logout.bind(this)
	}

	logout(){
		const alert = Modal.alert 
		alert('Log out', 'Do you want to leave?', [
	      { text: 'No', onPress: () => console.log('cancel') },
	      { text: 'Yes', onPress: () => {
	      	browserCookie.erase('userid')
	      	this.props.logoutSubmit()
	      }}
	    ])
	}
	
	render(){
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		return props.user? (
			<div>
			    <Result  
			     img = {<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt="" />}
			     title = {props.user}
			     message ={props.type==='recruiter'?<div>{props.company}</div> : null}
			     />

			     <List renderHeader={()=>'Profile'}>
			     	<Item multipleLine>
					    Position: {props.title}
					    {props.desc.split('\n').map(v=> <Brief key={v}>{v}</Brief>)}
					    <WhiteSpace></WhiteSpace>
					    {props.salary?<Brief> Salary: {props.salary}</Brief>:null}
			     	</Item>
			    </List>
			    <Button onClick={this.logout} style={{bottom: -50}} type='primary'>Log out</Button>
			  </div>
		):<Redirect to={props.redirectTo} />
	}
 }

export default User 