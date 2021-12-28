import React, { Component } from "react";

class R017 extends Component {
  render() {
    // 넘어온 값 받아오기
    let props_value=this.props.props_val;
    props_value+=' from App.js';
    return (
      <div>{props_value}</div>
    );
  }
}

export default R017;