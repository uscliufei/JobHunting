import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
 
 @withRouter
class UserCard extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.handleClick=this.handleClick.bind(this)
	// }
	static propTypes ={
		userList: PropTypes.array.isRequired
	}
	handleClick(v){
		// console.log('click')
		this.props.history.push(`/chat/${v._id}`)
	}
	test(){
		console.log('test')
	}
	render(){
		const Header = Card.Header
		const Body = Card.Body
		// console.log(Body)
		return (
			<WingBlank>
				 {this.props.userList.map(v=>(
				 	v.avatar?(
				 		<Card 
				 			key={v._id}
				 			onClick={ ()=>this.handleClick(v)} 
				 		>
				 		<Header 
					 		title={v.user} 
					 		thumb={require(`../img/${v.avatar}.png`)}
					 		extra={<span>{v.title}</span>}
				 		></Header>
				 		<Body>
				 			{v.type==='recruiter'?<div>Company:  {v.company}</div>:null}
				 			{v.desc.split('\n').map(d=>(
				 				<div key={d}>{d}</div>
				 			))}
				 			{v.type==='recruiter'?<div>Salary:  {v.salary}</div>:null}
				 		</Body>
				 	</Card>)
				 	:null
				 	))}
			</WingBlank>
		)
	}
}

export default UserCard
