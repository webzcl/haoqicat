import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

componentWillMount(){

}
  render(){
    // console.log(this.props.username);
    return(
      <div>
        {this.props.isLogin ? `welcome ${this.props.username}`: 'please login'}
      </div>
    )
  }
}

Header.PropTypes = {
  username:React.PropTypes.string.isRequired,
  isLogin:React.PropTypes.bool.isRequired
}

const mapStateToProps = (state)=>({
  username:state.username,
  isLogin:state.isLogin
})
export default connect(mapStateToProps)(Header);
