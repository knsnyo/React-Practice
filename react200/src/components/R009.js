import React, {Component} from 'react';

class R009 extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        var js_string1 = "JavaScript";
        var js_string2 = "\nReact";
        console.log(js_string1+ js_string2);

        var es6_string1 = 'ES6'
        var es6_string2 = 'Javascript'
        console.log(`
        ${es6_string1} 
        ${es6_string2}
        `);
    }

    render(){
        return(
            <h2>R009</h2>
        )
    }
}

export default R009;