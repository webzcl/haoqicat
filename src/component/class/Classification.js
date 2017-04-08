import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cats } from '../../actions/login.js';


class Classification extends Component {

  componentWillMount(){
    this.props.cats()
  }

  handleSubmit(e){
    e.preventDefault();
    let classification=this.refs.classification.value
    let data={
      "name":classification
    }
    // console.log(data);
    this.props.classification(data)
  }
  render(){
    return(
      <div>
        <div>新建课程分类</div>
        <ul>
          <li>
            <p>React <span>X</span></p>
          </li>
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          分类
          <input type="text" ref="classification"/>
          <input type="submit" value="创建分类"/>
        </form>
      </div>
    )
  }
}
Classification.PropTypes = {
  cats:React.PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({

})

export default connect(mapStateToProps,{cats})(Classification);
