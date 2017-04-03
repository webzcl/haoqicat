import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import {Provider} from 'react-redux';
import store from '../store.js'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div className="container">
          <Header/>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default App;
