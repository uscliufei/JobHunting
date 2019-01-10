import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
	static propTypes ={
		selectAvatar: PropTypes.func
	}
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		const AvatarList = 'man,woman,boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
							.split(',')
							.map(v=>({
								icon: require(`../img/${v}.png`),
								text: v
							}))
		const gridHeader = this.state.icon
							?(<div>
								<span>Avatar chosen</span>
								<img style={{width:20}} src={this.state.icon} alt=""/>
							</div>)
							: <div>Please choose an avatar</div>
		return (
			<div>
				<List renderHeader={()=>gridHeader}>
					<Grid data={AvatarList} columnNum={5} onClick={v=>{
						this.setState(v)
						this.props.selectAvatar(v.text)
						}}
					/>
				</List>
			</div>
		)
	}
}
export default AvatarSelector