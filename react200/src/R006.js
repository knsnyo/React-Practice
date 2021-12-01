import React, {Component} from 'react';

class R06 extends Component{
    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructer()');
    }

    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps()');
        console.log(props.prop_value);
        return {};
    }

    render(){
        console.log('3. render()');
        return(
            <h2>R06</h2>
        )
    }
}

export default R006;