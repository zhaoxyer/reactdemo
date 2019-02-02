import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/user.js'
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      pass: ''
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className="login">
          <div>
            <p>登陆</p>
            <input type="text" placeholder="请输入账号" onChange={this.handleChange.bind(this,'name')}/>
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this,'pass')}/>
            <button onClick={this.onLogin.bind(this)}>立即登陆</button>
            <p className="goregister" onClick={this.goRegister.bind(this)}>去注册</p>
          </div>
      </div>
    );
  }
  
  onLogin(){
    if(!this.state.name){
      alert('请输入账号')
      return
    }
    if(!this.state.pass){
      alert('请输入密码')
      return
    }
    this.props.setUser({name: this.state.name})
    sessionStorage.setItem('userInfo',JSON.stringify({name: this.state.name}))
    this.props.history.replace({ pathname: this.props.location.pageFrom || '/' })
  }
  goRegister(){
    this.props.history.push('/register')
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
})(Login));
