import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class PersonalCenterIndex extends Component {
  render(){
    return(
      <div>
        <div>个人中心</div>
        <div>
          <Link to ='/personalcenter/class'>创建课程</Link>
          <Link to ='/personalcenter/classification'>创建课程分类</Link>
        </div>
        <div>
          <h3>已买到的课程</h3>
          <ul>
            <li>A课程</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonalCenterIndex;
