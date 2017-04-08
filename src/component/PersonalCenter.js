import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class PersonalCenter extends Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default PersonalCenter;
