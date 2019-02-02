import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/menu'
import HomeRight from '../router/homeRight'

class App extends Component {
  componentWillMount(){
  }
  render() {
    return (
      <div className="App">
          <Router>
            <div className="cont">
              <Menu></Menu>
              <HomeRight></HomeRight>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
