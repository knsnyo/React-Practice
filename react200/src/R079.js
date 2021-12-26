import React, { Component } from "react";
import { add } from "./actions";

class R079 extends Component{
  render(){
    return (
      <input value="Add20" type="button" onClick={addString} />
    );
  }
}

const addString = () => {
  this.store.dispatch(add());
};

export default R079;