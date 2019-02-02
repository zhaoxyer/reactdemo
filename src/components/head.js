import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/user.js'
class Head extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
  }
  render() {
    const name = this.props.userInfo.name
    return (
        <header>
          <div><span>{name?'您好，'+name:''}</span>{name && <span onClick={this.loginOut.bind(this)}>退出</span>}</div>
        </header>
    );
  }
  loginOut(){
    sessionStorage.setItem('userInfo','')
    this.props.setUser({});
    this.props.history.push('/login')
  }
}


export default withRouter(connect(state => ({
  userInfo: state.userInfo
}), {
  setUser
})(Head));
