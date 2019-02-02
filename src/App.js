import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Head from './components/head'
import Foot from './components/foot'
import Index from './router/index'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
           <div>
            <Head></Head>
              <div className="contBox">
                  <Index></Index>
              </div>
              <Foot></Foot>
           </div>
         </Router>
      </div>
    );
  }
}

export default App;
