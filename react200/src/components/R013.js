import React,{Component} from 'react';

class R013 extends Component{
    constructor(props){
        super(props);
        this.state={
            arrow_func: 'react200',
            num: 3
        };
    }

    componentDidMount(){
        func1(1);
        this.func2(1, 1)
        this.func3(1, 3);
        this.func4();
        this.func5(1, 2, 3);

        function func1(num1){
            return console.log(`${num1}: ES5 function`);
        }
    }

    func2=(num1, num2)=>{
        let num3=num1+num2;
        console.log(`${num3} is arrow function ${this.state.arrow_func}`);
    }
    
    func3(){
        var _this=this;
        setTimeout(function(){
            //error
            //console.log(`${_this.bind.state.num} ES5 callback function no bind:`)
            //console.log(`${this.state.arrow_func}`);
        }, 100);
    }

    func4(){
        setTimeout(function(){
            console.log(`4. ES5 callback function bind: ${this.state.arrow_func}`);
        }.bind(this), 100);
    }

    func5=(num1, num2, num3)=>{
        const num4=num1+num2+num3;
        setTimeout(()=>{
            console.log(`${num4}. arrow callback function: ${this.state.arrow_func}`);
        }, 100);
    }

    render(){
        return(
            <h2> R013 </h2>
        )
    }
}

export default R013;