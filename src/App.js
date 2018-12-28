import React from  'react'
import {connect} from 'react-redux'
import {add, minus,AsyncAdd} from './index.redux'
import {Button, List} from 'antd-mobile'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>现在有武器{this.props.num}把</h1>
        <Button type = 'primary' onClick = {this.props.add}>申请武器</Button>
        <h1></h1>
        <Button type = 'primary' onClick = {this.props.minus}>扔掉武器</Button> 
        <h1></h1>
        <Button type = 'primary' onClick = {this.props.AsyncAdd}>拖两天给</Button> 
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {num:state}
}
const actionCreator = {add, minus, AsyncAdd}
App = connect(mapStatetoProps, actionCreator)(App)
export default App 




















