import React, {Component} from 'react';

class R07 extends Component{
    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructer()');
    }
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps');
        return {tmp_state: props.prop_value};
    }

    componentDidMount(){
        console.log('4. componentDidMonut()');
        console.log('5. tmp_state:'+ this.state.tmp_state);
    }

    render(){
        console.log('3. render()');
        return(
            <h2>R07</h2>
        )
    }
}

export default R007;