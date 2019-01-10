import React from 'react'
import { connect } from 'react-redux'
import { Route , Redirect} from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim'
import NavLinkBar from '../navlink/navlink'
import Recruiter from '../../component/recruiter/recruiter'
import Hunter from '../../component/hunter/hunter'
import Message from '../../component/message/message'
import User from '../../component/user/user'
import { getMsgList, recvMsg } from '../../redux/chat.redux'
 

@connect(
	state=>state,
	{ getMsgList, recvMsg } 
)
class Dashboard extends React.Component{
	componentDidMount(){
		if(!this.props.chat.chatmsg.length){
			this.props.getMsgList()
			// console.log('test')
			this.props.recvMsg()
		}	
	}
	render(){
		const user = this.props.user
		const { pathname } = this.props.location 
		const navList = [
			{
				path: '/recruiter',
				text: 'hunter',
				icon: 'recruiter',
				title: 'Hunters List',
				component: Recruiter,
				hide: user.type==='hunter'
			},
			{
				path: '/hunter',
				text: 'Recruiter',
				icon: 'hunter',
				title: 'Recruiter List',
				component: Hunter,
				hide: user.type === 'recruiter'
			}, 
			{
				path: '/msg',
				text: 'Message',
				icon: 'msg',
				title: 'Message',
				component: Message,
			},
			{
				path: '/me',
				text: 'My Profile',
				icon: 'user',
				title: 'My Profile',
				component: User,
			}
		]
		const page = navList.find(v=>v.path===pathname)
		return page ?(
			<div>
				<NavBar className='fixed-header' mode='dard'>{page.title}</NavBar>
					<div style = {{marginTop: 45}}>
						<QueueAnim type = 'scaleX' duration = { 800 }>
							<Route key={page.path} path={page.path} component={page.component}></Route>
						</QueueAnim>
					</div>
				<NavLinkBar data={navList}></NavLinkBar>
			</div>
		) : <Redirect to='/login' />
	}
}

export default Dashboard
