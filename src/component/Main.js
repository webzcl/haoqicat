import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCat } from '../actions/login.js'

class Main extends Component {
  componentWillMount(){
    this.props.getCat()
  }
  render(){
    let newCatList=this.props.newCat.map((item)=><li>{item.name}</li>)
    return(
      <div>
        main
        <ul>
          {newCatList}
        </ul>
      </div>
    )
  }
}


Main.PropTypes = {
  isLogin:React.PropTypes.bool.isRequired,
  getCat:React.PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  isLogin:state.account.isLogin,
  newCat:state.cat
})
export default connect(mapStateToProps,{getCat})(Main);
