import React, { Component } from 'react';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import App from './component/App.js'
import Main from './component/Main.js'
import LogIn from './component/Login.js'
import LogUp from './component/Logup.js'

class Routes extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Main}/>
          <Route path='login' component={LogIn} />
          <Route path='logup' component={LogUp} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
