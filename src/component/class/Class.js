import React, { Component } from 'react';
import { connect } from 'react-redux';


class Class extends Component {


  componentWillMount(){

  }
  handleSubmit(e){
    e.preventDefault()
    let name=this.refs.name.value;
    let poster=this.refs.pic.value;
    console.log(this.props.newCat);

  }

  render(){
    let optionList=this.props.newCat.map((item)=><option >{item.name}</option>)
    return(
      <div>
        <div>新建课程</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            课程封面
            <input type="text" ref="pic"/>
          </p>
          <p>
            课程名
            <input type="text" ref="name"/>
          </p>
          <p>
            课程简介
            <input type="text" ref="brifIntroduction"/>
          </p>
          <p>
            课程价格
            <input type="text" ref="price"/>
          </p>
          <p>
            分类
            <select>
              {optionList}
            </select>
          </p>
          <input type="submit" value="创建课程"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  newCat:state.cat
})

export default connect(mapStateToProps)(Class);
