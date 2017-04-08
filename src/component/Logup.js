import React, { Component } from 'react';
import {logup} from '../actions/login.js';
import { connect } from 'react-redux';



class Logup extends Component {

  _handleSubmit(e){
    e.preventDefault();
    let username=this.refs.username.value;
    let password=this.refs.password.value;
    let passwordAgain=this.refs.passwordAgain.value;
    let data={
      "username":username,
      "password":password
    }
    if(password==passwordAgain){
      this.props.logup(data);
      this.context.router.push(`/`);

    }else{
      alert('确认密码不正确,请重新输入')
    }
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
            <p className="user">
              确认密码
            <input className="passwordAgain" ref="passwordAgain" type="password" />
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
Logup.contextTypes={
  router:React.PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
  isLogup:state
})
export default connect(mapStateToProps,{logup})(Logup);
