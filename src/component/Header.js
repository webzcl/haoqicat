import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {logout} from '../actions/login.js';
import {preLogin} from '../actions/login.js';
import axios from 'axios'
class Header extends Component {

componentWillMount(){
  console.log(this.props.isLogin);
    let userId=window.localStorage.getItem('userId');
    this.props.preLogin(userId)
  
}
handleClick(){
  let data=false;
  this.props.logout(data);
  // localStorage.clear();
  localStorage.removeItem('userId')
}
  render(){
    // console.log(this.props.username);
    return(
      <div className='nav'>
        <Link to= "/" >首页</Link>
        <div className='log'>
          <Link to= "/login" >{this.props.isLogin ? `${this.props.username}` : '登录'}</Link>
          <span onClick={this.handleClick.bind(this)}>{this.props.isLogin ? '退出' : null }</span>
          <Link to= "/logup" >{this.props.isLogin ? null : '注册'}</Link>
        </div>
      </div>
    )
  }
}

Header.PropTypes = {
  username:React.PropTypes.string.isRequired,
  isLogin:React.PropTypes.bool.isRequired,
  logout:React.PropTypes.func.isRequired,
  preLogin:React.PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  username:state.account.username,
  isLogin:state.account.isLogin
})
export default connect(mapStateToProps,{logout,preLogin})(Header);
