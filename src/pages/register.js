import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/user.js'
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      pass: '',
      confirmPass: ''
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className="login">
          <div>
            <p>注册</p>
            <input type="text" placeholder="请输入账号" onChange={this.handleChange.bind(this,'name')}/>
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this,'pass')}/>
            <input type="password" placeholder="请再次输入密码" onChange={this.handleChange.bind(this,'confirmPass')}/>
            <button onClick={this.onRegister.bind(this)}>立即注册</button>
            <p className="goregister" onClick={this.goRegister.bind(this)}>去登陆</p>
          </div>
      </div>
    );
  }
  
  onRegister(){
    if(!this.state.name){
      alert('请输入账号')
      return
    }
    if(!this.state.pass){
      alert('请输入密码')
      return
    }
    if(this.state.confirmPass!==this.state.pass){
      alert('两次密码不一致')
      return
    }
    this.props.history.replace('/login')
  } 
  
  goRegister(){
    this.props.history.push('/login')
  }
  
  handleChange(type,e){
    const data = {}
    data[type] = e.target.value
    this.setState(data)
  }
}

export default withRouter(connect(state => ({
  userInfo: state.userInfo
}), {
  setUser
})(Register));
