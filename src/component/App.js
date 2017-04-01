import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import Login from './Login.js'

class App extends Component {
  render(){
    return(
      <div className="container">
        <Header/>
        <Login/>
      </div>
    )
  }
}

export default App;
