import React, { Component } from 'react';
import R079 from './R079';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Start React</h1>
        <span>{this.props.store.getStore().data.str}</span>
        <R079 store={this.props.store}/>
      </div>
    );
  }
}

export default App;