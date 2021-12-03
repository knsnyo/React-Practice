/* !!ERROR!! */
import React, { Component } from "react";
import $ from 'jquery';

class R016 extends Component {
  input_alert=(e)=>{
    var input = $("#input_id").val();
    this.alert(input);
  };

  render() {
    return (
    <div>
      <h2>R016</h2>
      <input id='input_id' name='input_name'/>
      <button id='btn_id' name='btn_name' onClick={e=>{this.input_alert(e)}}>Jquery Button</button>
    </div>
    );
  }
}

export default R016;
