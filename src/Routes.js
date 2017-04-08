import React, { Component } from 'react';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import App from './component/App.js'
import Main from './component/Main.js'
import LogIn from './component/Login.js'
import LogUp from './component/Logup.js'
import PersonalCenter from './component/PersonalCenter.js'
import PersonalCenterIndex from './component/PersonalCenterIndex.js'
import Class from './component/class/Class.js'
import Classification from './component/class/Classification.js'
import Cart from './component/cart/Cart.js'

class Routes extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Main}>
          </IndexRoute>
          <Route path='cart' component={Cart} />
          <Route path='login' component={LogIn} />
          <Route path='logup' component={LogUp} />
          <Route path='personalcenter' component={PersonalCenter}>
            <IndexRoute component={PersonalCenterIndex}/>
            <Route path='class' component={Class} />
            <Route path='classification' component={Classification} />
          </Route>
        </Route>
      </Router>
    )
  }
}

export default Routes;
