import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login.js';


class Login extends Component {



_handleSubmit(e){
  e.preventDefault();
  let username=this.refs.username.value;
  // console.log(username);
  this.props.login(username)
}

  render(){
    return(
      <div>

        <form onSubmit={this._handleSubmit.bind(this)} >
            <p>
              Username:
              <input ref="username" type="username" />
            </p>
            <p>
              Password:
            <input type="password" />
            </p>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

Login.PropTypes={
  login:React.PropTypes.func.isRequired
  // username:React.PropType.object.isRequired;
}
const mapStateToProps= (state)=>({
  username:state
})
export default connect(mapStateToProps,{login})(Login);
