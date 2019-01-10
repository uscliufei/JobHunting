import React from 'react'
import { List, Badge } from 'antd-mobile'
import { connect } from 'react-redux'



@connect(
	state=>state
)
class Message extends React.Component{
	getLast(arr){
		return arr[arr.length - 1]
	}
	
	render(){
		const Item = List.Item
		const Brief = Item.Brief
		const msgGroup ={}
		const userid = this.props.user._id
		const userinfo = this.props.chat.users
		this.props.chat.chatmsg.forEach(v=>{
			msgGroup[v.chatid] = msgGroup[v.chatid] || [] 
			msgGroup[v.chatid].push(v) 
		})
		const chatList = Object.values(msgGroup).sort((a, b)=>{
		   const a_last = this.getLast(a).create_time
		   const b_last = this.getLast(b).create_time
		   return b_last - a_last
		 })
			
		return (
			<div>
				{chatList.map(v=>{
					const lastItem = this.getLast(v)
					const targetID = v[0].from===userid?v[0].to:v[0].from 
					const name = userinfo[targetID]?userinfo[targetID].name :''
					const avatar = userinfo[targetID]?userinfo[targetID].avatar :''
					const unreadNum = v.filter(v=>!v.read&&v.to===userid).length
					return (
						<List key = {lastItem._id} >
							<Item 
								extra = {<Badge text={unreadNum}  />}
								thumb={require(`../img/${avatar}.png`)}
								arrow="horizontal"
								onClick={()=>{
									this.props.history.push(`/chat/${targetID}`)
								}}
							>
								{lastItem.content}
								<Brief>{name}</Brief>
							</Item>
						</List>
					)
				})}
			</div>
		)
	}
}

export default Message

