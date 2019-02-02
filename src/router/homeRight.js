import React from 'react';
import {Route} from 'react-router-dom';

import About from '../pages/About';
import Mine from '../pages/mine'
class HomeRight extends React.Component {
  componentWillMount(){
  }
  render() {
    return (
        <div className="right">
          <Route path="/" component={Mine} exact />
          <Route path="/about/:type" component={About} />
        </div>
    );
  }
}

export default HomeRight;
