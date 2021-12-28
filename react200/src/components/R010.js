import React, {Component} from 'react';

class R010 extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        // var: 재 할당 가능
        var var_name = 'react';
        console.log(`var_name: ${var_name}`);
        var var_name = '200';
        console.log(`var_name: ${var_name}`);

        // let: 재 할당 불가
        let let_name = 'react';
        console.log(`let_name: ${let_name}`);
        let_name = '200'
        console.log(`let_name: ${let_name}`);

        // const: 상수 
        const const_name = 'react';
        console.log(`const_name: ${const_name}`);
    }
    render(){
        return(
            <h2>var, let, const</h2>
        )
    }
}

export default R010;