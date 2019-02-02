import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { needLogin, backIndex } from '../config/needLogin'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
    const pageFrom = this.props.history.location.pathname
    if(needLogin(pageFrom)){
      if(!this.props.userInfo.name){
        this.props.history.replace({ pathname: "/login", pageFrom: pageFrom})
      }
    }
    if(backIndex(pageFrom)){
      if(this.props.userInfo.name){
        this.props.history.replace({ pathname: "/"})
      }
    }
  }
  render() {
      return (
        <div className="home-router">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      );
  }
}

export default withRouter(connect(state => ({
  userInfo: state.userInfo
}), {
})(Index));

