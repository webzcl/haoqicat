import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login.js';


class Login extends Component {



_handleSubmit(e){
  e.preventDefault();
  let username=this.refs.username.value;
  let password=this.refs.password.value;
  let data={
    "username":username,
    "password":password
  }
  // console.log(username);
  this.props.login(data);
  this.refs.submitForm.reset();
  this.context.router.push(`/`)
}

  render(){
    return(
      <div className='login'>
        <form className='form' ref="submitForm" onSubmit={this._handleSubmit.bind(this)} >
            <p>
              用户名
              <input className="username" ref="username" type="username" />
            </p>
            <p>
              密码
            <input className="password" ref="password" type="password" />
            </p>
            <input className='submit' type="submit" value="登录"/>
          </form>
      </div>
    )
  }
}

Login.PropTypes={
  login:React.PropTypes.func.isRequired
  // username:React.PropType.object.isRequired;
}
Login.contextTypes={
  router:React.PropTypes.object.isRequired
}
const mapStateToProps= (state)=>({
  username:state
})
export default connect(mapStateToProps,{login})(Login);
