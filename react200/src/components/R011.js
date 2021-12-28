import React, {Component} from 'react';

class R011 extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        // JS
        var array1 = ['num1', 'num2'];
        var array2 = ['num3', 'num4'];
        var sum_array1 = [].concat(array1, array2);
        console.log(`sum_array1: ${sum_array1}`);
        
        // ES6
        let sum_let_arr=[...array1, ...array2];
        console.log(`${sum_let_arr}`);
        const [sum1, sum2, ...remain] = sum_let_arr;
        console.log(`sum1: ${sum1} sum2: ${sum2} remain: ${remain}`);

        // Js
        var obj1={key1: 'val1', key2: 'val2'};
        var obj2={key2: 'new2', key3: 'new3'};
        var sum_obj=Object.assign({}, obj1, obj2);
        console.log(`sum_obj: ${sum_obj}`); 

        // ES6
        let sum_obj2={...obj1, ...obj2};
        console.log(`sum_obj2: ${JSON.stringify()}`);
        var{key1, key3, ...others} = sum_obj2;
        console.log(`key1: ${key1} key3: ${key3} others: ${JSON.stringify(others)}`);
    }

    render(){
        return(
            <h2> R011 </h2>
        )
    }
}

export default R011;