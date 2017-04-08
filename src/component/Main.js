import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCat } from '../actions/login.js';
import { purchase } from '../actions/login.js';
import { cancel } from '../actions/login.js';
import {Link} from 'react-router';

class Main extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  componentWillMount(){
    this.props.getCat();
  }
  handlePurchase(id){
    console.log(id);
    if(this.props.purchaseStore<this.props.newCat.length){
    this.props.purchase(id)
    }
    // console.log('----------',this.props.purchaseStore);
  }

  render(){
    let newCatList=this.props.newCat.map((item)=><li key={item._id}><img src={item.poster}/><p>{item.name}</p>
      <a onClick={this.handlePurchase.bind(this,item._id)}>购买</a>
    </li>)
    return(
      <div className="main">
        <h3>所有课程</h3>
        <ul>
          {newCatList}
        </ul>
        <div><span>{this.props.purchaseStore}</span><a>去结算</a></div>
      </div>
    )
  }
}


Main.PropTypes = {
  isLogin:React.PropTypes.bool.isRequired,
  getCat:React.PropTypes.func.isRequired,
  purchase:React.PropTypes.func.isRequired,
  cancel:React.PropTypes.func.isRequired
}

const mapStateToProps = (state)=>({
  isLogin:state.account.isLogin,
  newCat:state.cat,
  purchaseStore:state.purchaseStore.length
})
export default connect(mapStateToProps,{getCat,cancel,purchase})(Main);
