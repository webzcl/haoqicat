import React, { Component } from 'react';
import {logup} from '../actions/login.js';
import { connect } from 'react-redux'


class Logup extends Component {

  _handleSubmit(e){
    e.preventDefault();
    let username=this.refs.username.value;
    let password=this.refs.password.value;
    let data={
      "username":username,
      "password":password
    }
    this.props.logup(data);
    this.refs.submitForm.reset()
  }
  componentWillMount(){
    // alert(this.props.isLogup)
  }
  render(){
    return(
      <div className="logup" >
        <form className='form' ref="submitForm" onSubmit={this._handleSubmit.bind(this)} >
            <p className="user">
              用户名
              <input className="username" ref="username" type="username" />
            </p>
            <p className="user">
              密码
            <input className="password" ref="password" type="password" />
            </p>
            <input className='submit logup-submit' type="submit" value="注册"/>
          </form>
      </div>
    )
  }
}

Logup.PropTypes={
  logup:React.PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
  isLogup:state
})
export default connect(mapStateToProps,{logup})(Logup);
