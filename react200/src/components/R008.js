import React, {Component} from 'react';

class R008 extends Component{
    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructor()');
    }
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps()');
        console.log(props.prop_value);
        return {tmp_state: props.prop_value};
    }

    render(){
        console.log('3. render()')
        return(
            <h2>R008</h2>
        )
    }

    componentDidMount(){
        console.log('4. componentDidMount()');
        console.log('5. tmp_state: '+ this.state.tmp_sate);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state){
        console.log('6. shoudlComponentUpdate()');
        return state.tmp_state2;
    }
}

export default R008;