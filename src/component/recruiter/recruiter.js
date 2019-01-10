import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chatuser,
	{ getUserList }
)

class Recruiter extends React.Component{ 
	componentDidMount(){
		this.props.getUserList('hunter')
	}
	test(){
		console.log('test')
	}
	render(){
		return <UserCard userList = {this.props.userList}></UserCard>
	}
}

export default Recruiter